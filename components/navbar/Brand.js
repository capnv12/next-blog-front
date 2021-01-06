import React, { useContext } from 'react';
import { GlobalContext } from '../../pages/_app';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { getStrapiMedia } from '../../actions/media';

const Brand = () => {
	const global = useContext(GlobalContext);
	return (
		<Link href="/" passHref>
			<StyledLink>
				<Image src={getStrapiMedia(global.favicon)} width={50} height={50} />
			</StyledLink>
		</Link>
	);
};

const StyledLink = styled.a`
	display: flex;
	justify-content: center;
`;

export default Brand;
