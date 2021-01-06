import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { useSpring, animated, config } from 'react-spring';
import Link from 'next/link';
import Brand from './Brand';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';
import { menuItems } from '../../helpers/navLinks';
// import { listSearch } from '../../actions/product';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import SearchIcon from '@material-ui/icons/Search';
// import { theme } from '../theme/theme';
// import { useRouter } from 'next/router';

const Navbar = (props) => {
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

	return (
		<>
			<NavBar>
				<Brand />

				<div className="link-container ">{Links()}</div>

				<BurgerWrapper>
					<BurgerMenu
						navbarState={props.navbarState}
						handleNavbar={props.handleNavbar}
					/>
				</BurgerWrapper>
			</NavBar>
			<CollapseMenu
				navbarState={props.navbarState}
				handleNavbar={props.handleNavbar}
			/>
			{/* {searched && (
                <ProductDisplay className="bg-white w-100 pb-2">
                    {searchedProducts(searchResults)}
                </ProductDisplay>
            )} */}
		</>
	);
};

export default Navbar;

const NavBar = styled.nav`
	width: 100%;
	padding: 0.6em;
	z-index: 1;
	font-size: 1em;
	display: flex;
	justify-content: space-between;
	background: #fff;
	box-shadow: 0px 2px 7px -2px rgba(0, 0, 0, 0.75);
	.link-container {
		padding: 0.6em 0;
		.menu-item {
			padding: 0.6em;
			text-decoration: none;
			color: #000;
			font-weight: 700;
			&:hover {
				color: #207abd;
				border-bottom: 1px solid #207abd;
			}
		}
		@media (max-width: 768px) {
			display: none;
		}
	}
`;

const BurgerWrapper = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;
