import React from 'react';
import styled from 'styled-components';
const Footer = () => {
	return (
		<Wrapper>
			<p>© 2021 - Organisation</p>

			<a href="#" className="support">
				Contact Us
			</a>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	width: 100%;
	display: flex;
	margin-top: 2em;
	justify-content: space-between;
	background-color: #fff;
	padding: 0.6em;
	align-items: center;

	p {
		color: #000;
		font-size: 0.7em;
	}

	a {
		text-decoration: none;
		color: #000;
		font-weight: bold;
		font-size: 0.7em;
		&:hover {
			color: #207abd;
		}
	}
`;

export default Footer;
