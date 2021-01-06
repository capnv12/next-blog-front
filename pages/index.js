import Layout from '../components/Layout';
import styled from 'styled-components';
import Articles from '../components/Articles';
import Seo from '../components/Seo';
import HeroImage from '../components/HeroImage';
import { fetchAPI } from '../actions/api';
import { getStrapiMedia } from '../actions/media';
const Home = ({ articles, homePage }) => {
	return (
		<Layout>
			<Seo seo={homePage.seo} />
			<div className="content">
				<HeroImage
					title={homePage.hero.title}
					image={homePage.hero.heroImage}
				/>
				<Articles articles={articles} />
			</div>
		</Layout>
	);
};

const Hero = styled.div`
	postion: relative;
	text-align: center;
	overflow: hidden;
	height: 400px;
	width: 100%;
	h1 {
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
	}
`;
export async function getServerSideProps(context) {
	const articles = await fetchAPI('/articles?status=published');
	const homePage = await fetchAPI('/homepage');

	if (articles) {
		return {
			props: {
				articles,
				homePage,
			},
		};
	} else {
		context.res.statusCode = 404;
		return {
			props: {},
		};
	}
}

export default Home;
