import { getStrapiMedia } from '../actions/media';
import styled from 'styled-components';

const HeroImage = ({ title, image }) => {
	return (
		<Hero
			style={{
				background: `url(${getStrapiMedia(image)}) center / cover no-repeat`,
			}}
		>
			<h1>{title}</h1>
		</Hero>
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

export default HeroImage;
