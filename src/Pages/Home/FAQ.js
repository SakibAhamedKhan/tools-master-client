import React from 'react';

const FAQ = () => {
	return (
		<div className='my-32'>
			<h2 className='text-center text-5xl font-bold mb-10'>FAQ</h2>
			

			<div  data-aos="flip-up" data-aos-anchor-placement="center-bottom" className='mx-10'>
				<div class="card bg-white shadow-xl mx-auto max-w-4xl">
					<div class="card-body">
						<div tabindex="0" class="collapse collapse-plus border border-base-200 bg-white shadow-md rounded-box my-2">
							<div class="collapse-title text-xl font-medium">
								Can I use Paypal for payment?
							</div>
							<div class="collapse-content"> 
								<p>Yeah,  You can use Paypal for paid your order, but minimum must be $100.</p>
							</div>
						</div>
						
						<div tabindex="0" class="collapse collapse-plus border border-base-200 bg-white shadow-md rounded-box my-2">
							<div class="collapse-title text-xl font-medium">
								What is the minimum time for shipping my product?
							</div>
							<div class="collapse-content"> 
								<p>After clear your payment, You will get product in 7 Days.</p>
							</div>
						</div>

						<div tabindex="0" class="collapse collapse-plus border border-base-200 bg-white shadow-md rounded-box my-2">
							<div class="collapse-title text-xl font-medium">
								I need the Product that is more the Available Quantity?
							</div>
							<div class="collapse-content"> 
								<p>If you need this product more the Available, you can mail use: toolsmaster@gmail.com</p>
							</div>
						</div>




					</div>
				</div>
			</div>

		</div>
	);
};

export default FAQ;