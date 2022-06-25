import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../Assets/images/banner1.jpg';
import banner2 from '../../Assets/images/banner2.jpg';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HomeBanner = () => {
	const [user, loading, error] = useAuthState(auth);
	const [admin, adminLoading] = useAdmin(user);
	const navigate = useNavigate();

	if (loading || (user && adminLoading)) {
		return <Loading></Loading>
	}
	const particlesInit = async (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);	
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	return (
		<div class="hero min-h-screen mt-[-66px]" style={{ backgroundImage: `url(${banner2})` }}>

			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fpsLimit: 200,
					interactivity: {
						events: {
							onClick: {
								enable: false,
								mode: "push",
							},
							onHover: {
								enable: false,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 2,
							},
							repulse: {
								distance: 1000,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 0.4,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: false,
							speed: 2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 1000,
							},
							value: 100,
						},
						opacity: {
							value: 0.3,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>
			<div class="hero-overlay bg-opacity-25"></div>
			<div class="hero-content text-center text-neutral-content">
				<div class="max-w-md">
					<h1 class="mb-5 text-5xl font-bold text-white">Tools Need?</h1>
					<p class="mb-5 text-white">We provide the best quality tools all over the world</p>
					{
						user ?
							<>
								{admin && <button onClick={() => {
									navigate('/dashboard/addTool');
								}} class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Add an new Tool</button>}
								{!admin && <button onClick={() => {
									navigate('/dashboard/myorders');
								}} class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Explore All Order</button>}
							</>
							:
							<button onClick={() => {
								navigate('/login');
							}} class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary ">Get Started</button>
					}
				</div>
			</div>
		</div>
	);
};

export default HomeBanner;