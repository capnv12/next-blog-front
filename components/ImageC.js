import { getStrapiMedia } from '../actions/media';
import Image from 'next/image';

const ImageC = ({ image, width, height }) => {
	const imageUrl = getStrapiMedia(image);

	return (
		<Image
			src={imageUrl}
			alt={image.alternativeText || image.name}
			width={width}
			height={height}
		/>
	);
};

export default ImageC;
