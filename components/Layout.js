import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleNavbar = () => {
		setNavbarOpen(!navbarOpen);
	};
	return (
		<>
			<Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
			<div className="container">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
