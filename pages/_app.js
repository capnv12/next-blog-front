import App from 'next/app';
// import { Provider } from '../context/CartContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/theme/theme';
import GlobalStyles from '../components/theme/globalStyles';
// import '../node_modules/react-quill/dist/quill.snow.css';
import { getStrapiMedia } from '../actions/media';
import { fetchAPI } from '../actions/api';
import { createContext } from 'react';
import Head from 'next/head';

export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
	const { global } = pageProps;
	return (
		<>
			<Head>
				<link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
			</Head>
			<GlobalStyles />
			<GlobalContext.Provider value={global}>
				<Component {...pageProps} />
			</GlobalContext.Provider>
		</>
	);
};

MyApp.getInitialProps = async (ctx) => {
	const appProps = await App.getInitialProps(ctx);
	const global = await fetchAPI('/global');
	return { ...appProps, pageProps: { global } };
};

export default MyApp;
