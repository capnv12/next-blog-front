import Layout from '../../components/Layout';
import styled from 'styled-components';
import Seo from '../../components/Seo';
import { fetchAPI, getStrapiURL } from '../../actions/api';
// import { getStrapiMedia } from '../../actions/media';
import HeroImage from '../../components/HeroImage';
import ImageC from '../../components/ImageC';
import Error from 'next/error';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';
const Article = ({ article }) => {
	const seo = {
		metaTitle: article.title,
		metaDescription: article.description,
		shareImage: article.image,
		article: true,
	};

	if (!article) {
		return <Error statusCode={404} />;
	} else {
		return (
			<Layout>
				<Seo seo={seo} />
				<div className="container">
					<HeroImage title={article.title} image={article.image} />
					<Wrapper className="container">
						<div className="article-details">
							<div className="date">
								<Moment format="MMM Do YYYY">{article.published_at}</Moment>
							</div>
							<div className="author">
								{article.author.picture && (
									<ImageC
										image={article.author.picture}
										height={30}
										width={30}
									/>
								)}
								<p className="">By {article.author.name}</p>
							</div>

							{/* <div>
								{article.author.picture && (
									<ImageC
										image={article.author.picture}
										height={30}
										width={30}
									/>
								)}
							</div>
							<div className="">
								<p className="">By {article.author.name}</p>
								<p className="">
									
								</p>
							</div> */}
						</div>
						<hr />
						<ReactMarkdown
							source={article.content}
							escapeHtml={false}
							transformImageUri={(uri) =>
								uri.startsWith('http') ? uri : getStrapiURL(uri)
							}
						/>
					</Wrapper>
				</div>
			</Layout>
		);
	}
};
const Wrapper = styled.div`
	background: #fff;
	padding: 0.6em;
	.article-details {
		display: flex;
		justify-content: space-between;
		.date {
			display: flex;
			padding: 0.6em;
			align-items: center;
		}
		.author {
			display: flex;
			padding: 0.6em;
			align-items: center;
			p {
				margin: 0 0.6em;
			}
		}
	}
`;
export async function getServerSideProps(context) {
	const article = await fetchAPI(
		`/articles?slug=${context.query.slug}&status=published`
	);

	if (article) {
		return {
			props: {
				article: article[0],
			},
		};
	} else {
		context.res.statusCode = 404;
		return {
			props: {},
		};
	}
}

export default Article;
