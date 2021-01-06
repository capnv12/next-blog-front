import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
import { ServerStyleSheet } from 'styled-components';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					{/* <meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/> */}
					<meta name="robots" content="index, follow" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
