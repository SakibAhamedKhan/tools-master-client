import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeTool = ({tool}) => {
	const {_id, name, image, description, min_quantity, available_quantity, price} = tool;
	const navigate = useNavigate();

	const handleOrder = () => {
		navigate(`/purchase/${_id}`);
	}
	return (
		
		<div class="card w-fit bg-white shadow-xl border-2 border-white border-dashed hover:border-primary rounded-md">
			<figure className='h-48 mt-14 mb-6'><img className='' src={image} alt="Shoes" /></figure>
			<div class="card-body">
					<h2 class="card-title">{name}</h2>
					<p className='text-justify mb-2'>{description.length > 100 ? description.slice(0,100)+'...' : description}</p>
					<p><span className='font-semibold'>Available: </span>{available_quantity}</p>
					<p><span className='font-semibold'>Minimum Order: </span>{min_quantity}</p>
					<p><span className='font-semibold'>Price: </span>${price}</p>
					<div class="card-actions justify-end">
					<button onClick={handleOrder} class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Order Now</button>
				</div>
			</div>
		</div>
	);
};

export default HomeTool;