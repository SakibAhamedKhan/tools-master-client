import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const BusinessSummary = () => {
	const [show, setShow] = useState(false);
	
	return (
		<div className='my-32'>
			<h2 className='text-center text-4xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-10 lg:mb-10'>Summary</h2>
			{/* <div className='flex justify-center flex-col items-center my-32 overflow-x-auto'>
				<div class="stats shadow-lg ">
					<div class="stat place-items-center w-full bg-white h-40">
						<div class="stat-title">Customers</div>
						<div class="stat-value">20K+</div>
						<div class="stat-desc">All over the world</div>
					</div>
					
					<div class="stat place-items-center w-full bg-white">
						<div class="stat-title">Total Paid</div>
						<div class="stat-value text-success">$35000+</div>
						<div class="stat-desc">Per Month</div>
					</div>
					
					<div class="stat place-items-center w-full bg-white">
						<div class="stat-title">Tools</div>
						<div class="stat-value">2000+</div>
						<div class="stat-desc">In Every New Stock</div>
					</div>
				</div>
			</div> */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 justify-items-center gap-5'>
				<div className='bg-white shadow-md flex flex-col justify-center items-center w-60 md:w-72 lg:w-80 p-5 rounded-lg mx-2'>
					<div className='text-xs'>Customers</div>
					<div className='text-4xl font-black my-3'>
						<CountUp end={show? 10000 : 0}>
							{({ countUpRef, start }) => (
								<VisibilitySensor
								onChange={isVisible => {
								  if (isVisible) {
									setShow(true);
								  }
								}}
								delayedCall
							  >
								<span ref={countUpRef} />
							  </VisibilitySensor>
							)}
						</CountUp>
						+
					</div>
					<div className='text-xs'>All over the world</div>
				</div>
				<div className='bg-white shadow-md flex flex-col justify-center items-center w-60 md:w-72 lg:w-80 p-5 rounded-lg mx-2'>
					<div className='text-xs'>Total Paid</div>
					<div className='text-4xl font-black my-3 text-success'>
					$
					<CountUp end={show? 3500000 : 0}>
							{({ countUpRef, start }) => (
								<VisibilitySensor
								onChange={isVisible => {
								  if (isVisible) {
									setShow(true);
								  }
								}}
								delayedCall
							  >
								<span ref={countUpRef} />
							  </VisibilitySensor>
							)}
						</CountUp>
						+
					</div>
					<div className='text-xs'>Per Month</div>
				</div>
				<div className='bg-white shadow-md flex flex-col justify-center items-center w-60 md:w-72 lg:w-80 p-5 rounded-lg mx-2'>
					<div className='text-xs'>Tools</div>
					<div className='text-4xl font-black my-3'>
						<CountUp end={show? 2000 : 0}>
							{({ countUpRef, start }) => (
								<VisibilitySensor
								onChange={isVisible => {
								  if (isVisible) {
									setShow(true);
								  }
								}}
								delayedCall
							  >
								<span ref={countUpRef} />
							  </VisibilitySensor>
							)}
						</CountUp>
						+</div>
					<div className='text-xs'>In Every New Stock</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessSummary;