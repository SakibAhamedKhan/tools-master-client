import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import uploadImage from '../../Assets/images/upload.jpg'

const MyProfile = () => {
	const [user, loading, error] = useAuthState(auth);
	const [show, setShow] = useState(false);
	const [uploading, setUploading] = useState(false);

	
	const {data:userData, isLoading, refetch} = useQuery('userProfile', () => {
		return fetch(`http://localhost:5000/profile/${user.email}`,{
			headers:{
				authorization: `Bearer ${localStorage.getItem('access-token')}`
			}
		})
		.then(res => res.json());
	})
	// useEffect( ()=>{
	// 	fetch(`http://localhost:5000/profile/${user.email}`)
	// 	.then(res => res.json())
	// 	.then(data => setUserData(data));
	// } ,[]);
	if(loading || uploading ||  isLoading){
		return <Loading></Loading>;
	}

	
	const image_key = '0cd588ba1e152646a09f8f7beda7931c';
	let photo;
	const handleFile = event => {
		console.log(event.target.files[0]);
		photo = event.target.files[0];
		
	}

	const handleUpdateProfile = (event) => {
		event.preventDefault();
		setUploading(true);
		const education = event.target.education.value;
		const location = event.target.location.value;
		const phone = event.target.phone.value;
		const linkedin = event.target.linkedin.value;
		// const photo = event.target.files;

		const formData = new FormData();
		formData.append('image', photo);
		console.log(formData);
		fetch(`https://api.imgbb.com/1/upload?key=${image_key}`,{
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(data => {
			if(data.success){
				console.log(data);
				const img = data.data.url;
				const doc ={
					name: user.displayName,
					education: education,
					location: location,
					phone: phone,
					photo: img,
					linkedin: linkedin
				}
				fetch(`http://localhost:5000/profile/${user.email}`,{
					method: 'PUT',
					headers:{
						'content-type': 'application/json',
						
					},
					body: JSON.stringify(doc)
				})
				.then(res => res.json())
				.then(data => {
					if(data?.acknowledged){
						Swal.fire(
							'Hurrah! Your Profile is Updated 😎',
							'',
							'success'
						  )
						  setUploading(false);
						  refetch();
					}
				})
			}
			setUploading(false);
		})

		setShow(false);
		event.target.reset();

	}


	return (
		<div>
			<h2 className='text-center text-accent text-xl my-2 font-semibold'>My Profile</h2>
			
			<div class="card bg-white shadow-xl mx-10 my-5">
				<div class="card-body">
					<div class="avatar">
						<div class="w-24 rounded-full">
							<img src={userData?.photo? userData.photo : uploadImage} />
						</div>
					</div>
					<p className='mb-2 text-xl overflow-x-auto'>Name: {user?.displayName}</p>
					<p className='mb-2 text-xl overflow-x-auto'>Email: {user?.email}</p>
					<p className='mb-2 text-xl overflow-x-auto'>Education: {userData?.education} </p>
					<p className='mb-2 text-xl overflow-x-auto'>Location: {userData?.location} </p>
					<p className='mb-2 text-xl overflow-x-auto'>Phone Number: {userData?.phone}</p>
					<p className='mb-2 text-xl overflow-x-auto'>Linkedin: <span className='text-blue-500 underline'><a href={userData?.linkedin} target='_blank'>{userData?.linkedin}</a></span></p>
					<button onClick={() => setShow(true)} className='btn btn-accent text-white w-fit'>Update Profile</button>
				</div>
			</div>

			{/* modal */}
			<input checked={show} type="checkbox" id="my-modal-6" class="modal-toggle" />
				<div class="modal modal-bottom sm:modal-middle mt-16">
				<div class="modal-box">
					<div className='flex flex-col justify-center items-center'>
						<h2 className='text-xl font-semibold mb-3'>Update your profile</h2>
						<form onSubmit={handleUpdateProfile} className='flex flex-col items-center'>
							<input readOnly value={user?.displayName} type="text" placeholder="Type here" class="input input-bordered w-72 md:w-96 lg:w-96 mb-3" />
							<input readOnly value={user?.email} type="text" placeholder="Type here" class="input input-bordered w-72 md:w-96 lg:w-96 mb-3" />
							<input name='education' type="text" placeholder="Education" class="input input-bordered w-72 md:w-96 lg:w-96 mb-3" required/>
							<textarea name='location' type="text" placeholder="Location" class="textarea textarea-bordered w-72 md:w-96 lg:w-96 mb-3"  required/>
							<input name='phone' type="number" placeholder="Phone Number" class="input input-bordered w-72 md:w-96 lg:w-96 mb-3"  required/>
							<input name='linkedin' type="text" placeholder="Linkedine Profile Link" class="input input-bordered w-72 md:w-96 lg:w-96 mb-3"  required/>
							<input onBlur={handleFile} name='photo' type="file" placeholder="file" class="input input-bordered h-14 w-72 md:w-96 lg:w-96 mb-3 pt-3"  required/>

							<div class="">
								<button type='submit'  class="btn btn-primary text-white mr-2">Submit</button>
								<button onClick={() => setShow(false)} class="btn btn-accent text-white">Cancel</button>
							</div>
						</form>

						
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProfile;