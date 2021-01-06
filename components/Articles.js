import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Articles = ({ articles }) => {
	const leftArticlesCount = Math.ceil(articles.length / 5);
	const leftArticles = articles.slice(0, leftArticlesCount);
	const rightArticles = articles.slice(leftArticles, articles.length);

	return (
		<Container>
			{articles.map((article, i) => {
				return <Card article={article} key={i} />;
			})}
		</Container>
	);
};
const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 0 auto;
`;

export default Articles;
