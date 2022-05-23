import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialGoogle = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const navigate = useNavigate();

	if(loading) {
		return <p className='text-center'>Loading...</p>;
	}
	if(user) {
		return navigate('/');
	}

	const handleGoogleLogin = () => {
		signInWithGoogle();
	}

	return (
		<div className='w-full'>
			<button onClick={handleGoogleLogin} class="btn btn-error btn-outline w-full">Continue with Google</button>
		</div>
	);
};

export default SocialGoogle;