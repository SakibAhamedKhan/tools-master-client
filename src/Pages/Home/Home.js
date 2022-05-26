import React from 'react';
import Footer from '../Shared/Footer';
import BusinessSummary from './BusinessSummary';
import FAQ from './FAQ';
import HomeBanner from './HomeBanner';
import HomeTools from './HomeTools';
import NavBar from './NavBar';
import Partners from './Partners';
import Review from './Review';

const Home = () => {
	return (
		<div>
			<NavBar></NavBar>
			<HomeBanner></HomeBanner>
			<HomeTools></HomeTools>
			<BusinessSummary></BusinessSummary>
			<FAQ></FAQ>
			<Partners></Partners>
			<Review></Review>
			<Footer></Footer>
		</div>
	);
};

export default Home;