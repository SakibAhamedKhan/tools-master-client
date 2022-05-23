import React from 'react';
import Footer from '../Shared/Footer';
import HomeBanner from './HomeBanner';
import HomeTools from './HomeTools';
import NavBar from './NavBar';

const Home = () => {
	return (
		<div>
			<NavBar></NavBar>
			<HomeBanner></HomeBanner>
			<HomeTools></HomeTools>
			<Footer></Footer>
		</div>
	);
};

export default Home;