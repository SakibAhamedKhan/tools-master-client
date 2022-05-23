import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
import SocialGoogle from './SocialGoogle';

const Signup = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [show1, setShow1] = useState(false);

	const onSubmit = data => {
		console.log(data);
	}

	return (
		<div className='flex justify-center flex-col items-center my-20'>
			<h2 className='text-3xl font-black mb-8'>Tools Master</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div class="card flex-shrink-0 w-full md:w-screen lg:w-screen max-w-sm shadow-lg bg-white px-4">
					<div class="card-body">
						<h2 className='text-xl font-bold'>Sign up your account</h2>
						<div class="form-control">
							<label class="label">
								<span class="label-text">Name</span>
							</label>
							<input type="text" class="input input-bordered bg-white" 
							{...register('name', {
								required:{
									value: true,
									message: 'Name must be Required'
								}
							})}
							/>
							<label class="label">
								{errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
							</label>
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text">Email</span>
							</label>
							<input type="text" class="input input-bordered bg-white" 
							{...register('email', {
								required:{
									value: true,
									message: 'Email must be Required'
								},
								pattern: {
									value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
									message: 'Email is Invaild'
								}
							})}
							/>
							<label class="label">
								{errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
								{errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
							</label>
						</div>
						<div class="form-control">
						<label class="label">
								<span class="label-text">Password</span>
								<span class="label-text-alt ">
									{
										show1?
										<div onClick={()=>{
											setShow1(!show1)
										}} className='flex items-center text-blue-700 font-semibold'>
											<p>Hide</p><BiShowAlt className='mt-1 ml-2'></BiShowAlt>
										</div>
										:
										<div onClick={() =>{
											setShow1(!show1)
										}} className='flex items-center text-blue-700 font-semibold'>
											<p>Show</p><BiHide className='mt-1 ml-2'></BiHide>
										</div>

									}
								</span>
							</label>
							<input type={ show1 ? 'text' : 'password'}  class="input input-bordered bg-white" 
							{...register('password', {
								required:{
									value: true,
									message: 'Password must be Required'
								},
								minLength: {
									value: 6,
									message: 'Password must be Character or longer'
								}
							})}
							/>
							<label class="label">
								{errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
								{errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
							</label>
						</div>
						<div class="form-control mt-2">
							<button type='submit' class="btn btn-accent text-white">Login</button>
						</div>
						<p className='label-text-alt ml-1 text-center'>Already have an account? <Link to='/login' className='text-blue-800 underline'>Log in</Link></p>

						<div class="divider">OR</div>

						<SocialGoogle></SocialGoogle>
					</div>
				</div>
			</form>
			
		</div>
	);
};

export default Signup;