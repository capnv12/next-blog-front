import React from 'react';
import Link from 'next/link';
import ImageC from './ImageC';
import styled from 'styled-components';
import { getStrapiMedia } from '../actions/media';
const Card = ({ article }) => {
	return (
		<Link href={`/article/${article.slug}`} passHref>
			<a>
				<Container
					style={{
						background: `url(${getStrapiMedia(
							article.image
						)}) center / cover no-repeat`,
					}}
				>
					<div className="body">
						<div className="overlay"></div>
						<Link href={`/category/${article.category.slug}`} passHref>
							<a className="category">{article.category.name}</a>
						</Link>
						<p className="title">{article.title}</p>

						<div className="card-info">{article.description}</div>
					</div>
				</Container>
			</a>
		</Link>
	);
};

const Container = styled.div`
	height: 400px;
	overflow: hidden;
	text-align: center;
	margin: 0.6em;
	transition: all 0.3s ease-in-out;
	position: relative;

	.card-info {
		width: 100%;
		height: 50%;
		position: absolute;
		bottom: -120px;
		left: 0;
		margin: 0 auto;
		padding: 0.6em;
		color: #fff;
		font-style: 16px;
		line-height: 24px;
		z-index: 20;
		opacity: 0;
		transition: bottom 0.3s, opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
	}
	.category {
		text-transform: uppercase;
		color: #fff;
		font-size: 12px;
		position: relative;
		z-index: 25;
		:hover {
			text-decoration: underline;
		}
	}
	.title {
		color: #fff;
		font-size: 20px;
		padding: 1em 0.6em;
		position: relative;
		font-weight: 700;
		z-index: 25;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.2);
		height: 400px;
		width: 100%;
		z-index: 15;
	}
	&:hover {
		.card-info {
			opacity: 1;
			padding-top: 2.6em;
			bottom: 0;
			background-image: linear-gradient(
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 0, 0, 0.3) 21%,
				rgba(0, 0, 0, 0.6) 80%
			);
		}

		box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.5);
	}
`;

export default Card;
