import React from 'react';

const HomeTool = ({tool}) => {
	const {_id, name, image, description, min_quantity, available_quantity, price} = tool;
	return (
		<div class="card w-fit bg-white shadow-xl border-4 border-white border-dashed hover:border-primary">
			<figure><img className='mt-10' src={image} alt="Shoes" /></figure>
			<div class="card-body">
					<h2 class="card-title">{name}</h2>
					<p>{description.length > 100 ? description.slice(0,100)+'...' : description}</p>
					<div class="card-actions justify-end">
					<button class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default HomeTool;