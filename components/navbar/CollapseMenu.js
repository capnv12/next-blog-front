import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useSpring, animated } from 'react-spring';
import { menuItems } from '../../helpers/navLinks';
import { theme } from '../theme/theme';
const CollapseMenu = (props) => {
	const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

	const Links = () => {
		if (menuItems.length > 0) {
			return menuItems.map((menuItem, i) => {
				return (
					<Link href={menuItem.link} key={i}>
						<a className="menu-item">{menuItem.label}</a>
					</Link>
				);
			});
		}
	};
	if (props.navbarState === true) {
		return (
			<React.Fragment>
				<Closer onClick={props.handleNavbar} />
				<CollapseWrapper
					style={{
						transform: open
							.interpolate({
								range: [0, 0.2, 0.3, 1],
								output: [0, 0, 0, -200],
							})
							.interpolate((openValue) => `translate3d( ${openValue}px,0,0)`),
					}}
				>
					<NavLinks>{Links()}</NavLinks>
				</CollapseWrapper>
			</React.Fragment>
		);
	}
	return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
	background: #fff;
	position: absolute;
	z-index: 999;
	top: 0;
	bottom: 0;
	width: 300px;
`;
const Closer = styled.div`
	position: fixed;
	z-index: 998;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	right: 0;
	left: 0;
	opacity: 1;
	visibility: visible;
	background-color: rgba(0, 0, 0, 0.7);
	transition: opacity 0.25s ease, visibility 0s ease;
`;

const NavLinks = styled.ul`
	list-style-type: none;
	border-top: 1px solid rgba(129, 129, 129, 0.2);
	height: 100%;
	background: #fff;

	& a {
		display: flex;
		align-items: center;
		flex-direction: row;
		padding-top: 5px;
		padding-right: 20px;
		padding-bottom: 5px;
		padding-left: 20px;
		min-height: 50px;
		border-bottom: 1px solid rgba(129, 129, 129, 0.2);
		color: #2d2a2a;
		letter-spacing: 0.2px;
		font-weight: 600;
		font-size: 14px;
		line-height: 1.3;
		text-decoration: none;

		&:hover {
			color: #207abd;
			border-bottom: 1px solid #207abd;
		}
	}
`;
