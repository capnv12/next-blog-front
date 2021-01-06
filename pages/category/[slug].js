import Layout from '../../components/Layout';
import styled from 'styled-components';
import Articles from '../../components/Articles';
import Seo from '../../components/Seo';
import HeroImage from '../../components/HeroImage';
import { fetchAPI } from '../../actions/api';
import Error from 'next/error';
const Category = ({ category }) => {
	const seo = {
		metaTitle: category.name,
		metaDescription: `All ${category.name} articles`,
	};
	if (!category) {
		return <Error statusCode={404} />;
	} else {
		return (
			<Layout>
				<Seo seo={seo} />
				<div className="content">
					{category.image ? (
						<HeroImage title={category.name} image={category.image} />
					) : (
						<h1>{category.name}</h1>
					)}
					<Articles articles={category.articles} />
				</div>
			</Layout>
		);
	}
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
	const category = await fetchAPI(`/categories?slug=${context.query.slug}`);

	if (category) {
		return {
			props: {
				category: category[0],
			},
		};
	} else {
		context.res.statusCode = 404;
		return {
			props: {},
		};
	}
}

export default Category;
