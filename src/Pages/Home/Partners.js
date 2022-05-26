import React from 'react';

const Partners = () => {
	return (
		<div className='mx-5 md:mx-8 lg:mx-10 my-48'>
			<h2 className='text-center text-5xl font-bold mb-10'>Our Partners</h2>

			<div class="card bg-white shadow-md  overflow-x-auto px-3 md:px-10 lg:px-10">
				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center items-center justify-items-center py-6 gap-5'>
					<p className='text-2xl italic font-bold text-slate-300'>Facebook</p>
					<p className='text-2xl italic font-bold text-slate-300'>Google</p>
					<p className='text-2xl italic font-bold text-slate-300'>Paypal</p>
					<p className='text-2xl italic font-bold text-slate-300'>Payoneer</p>
				</div>
			</div>
		</div>
	);
};

export default Partners;