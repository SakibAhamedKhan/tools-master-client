import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../Assets/images/banner1.jpg';
import banner2 from '../../Assets/images/banner2.jpg';
import auth from '../../firebase.init';

const HomeBanner = () => {
	const [user, loading, error] = useAuthState(auth);

	const navigate = useNavigate();
	return (
		<div class="hero min-h-screen" style={{backgroundImage: `url(${banner2})`}}>
			<div class="hero-overlay bg-opacity-60"></div>
			<div class="hero-content text-center text-neutral-content">
				<div class="max-w-md">
					<h1 class="mb-5 text-5xl font-bold text-white">Tools Need?</h1>
					<p class="mb-5 text-white">We provide the best quality tools all over the world</p>
					{
						user?
						<button onClick={() => {
							// navigate('/signup');
						}} class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Explore All Tools</button>
						:
						<button onClick={() => {
							navigate('/signup');
						}} class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
					}
				</div>
			</div>
		</div>
	);
};

export default HomeBanner;