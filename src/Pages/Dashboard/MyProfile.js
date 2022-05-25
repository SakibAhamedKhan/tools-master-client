import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
	const [user, loading, error] = useAuthState(auth);
	const [show, setShow] = useState(false);

	if(loading){
		return <Loading></Loading>;
	}

	return (
		<div>
			<h2 className='text-center text-accent text-xl my-2 font-semibold'>My Profile</h2>
			
			<div class="card bg-white shadow-xl mx-10 my-5">
				<div class="card-body">
					<div class="avatar">
						<div class="w-24 rounded-full">
							<img src="https://api.lorem.space/image/face?hash=92310" />
						</div>
					</div>
					<p className='mb-2 text-xl'>Name: {user?.displayName}</p>
					<p className='mb-2 text-xl'>Email: {user?.email}</p>
					<p className='mb-2 text-xl'>Education: </p>
					<p className='mb-2 text-xl'>Location: </p>
					<p className='mb-2 text-xl'>Phone Number: </p>
					<p className='mb-2 text-xl'>Linkedin: </p>
					<button onClick={() => setShow(true)} className='btn btn-accent text-white w-fit'>Update Profile</button>
				</div>
			</div>

			{/* modal */}
			<input checked={show} type="checkbox" id="my-modal-6" class="modal-toggle" />
				<div class="modal modal-bottom sm:modal-middle mt-16">
				<div class="modal-box">
					<div className='flex flex-col justify-center items-center'>
						<h2 className='text-xl font-semibold mb-3'>Update your profile</h2>
						<form className='flex flex-col items-center'>
							<input readOnly value={user?.displayName} type="text" placeholder="Type here" class="input input-bordered w-72 md:w-96 lg:w-96 mb-3" />
							<input readOnly value={user?.email} type="text" placeholder="Type here" class="input input-bordered w-72 md:w-96 lg:w-96 mb-3" />
							<input type="text" placeholder="Education" class="input input-bordered w-72 md:w-96 lg:w-96 mb-3" required/>
							<textarea type="text" placeholder="Location" class="textarea textarea-bordered w-72 md:w-96 lg:w-96 mb-3"  required/>
							<input type="number" placeholder="Phone Number" class="input input-bordered w-72 md:w-96 lg:w-96 mb-3"  required/>
							<input type="text" placeholder="Linkedine Profile Link" class="input input-bordered w-72 md:w-96 lg:w-96 mb-3"  required/>
							<input type="file" placeholder="Type here" class="input input-bordered h-14 w-72 md:w-96 lg:w-96 mb-3 pt-3"  required/>
						</form>

						<div class="">
							<button  class="btn btn-primary text-white mr-2">Submit</button>
							<button onClick={() => setShow(false)} class="btn btn-accent text-white">Cancel</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProfile;