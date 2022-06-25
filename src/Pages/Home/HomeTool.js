import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const HomeTool = ({tool}) => {
	const {_id, name, image, description, min_quantity, available_quantity, price} = tool;
	const navigate = useNavigate();

	const handleOrder = () => {
		navigate(`/purchase/${_id}`);
	}
	return (
		
		<div  class="card w-72 md:w-full lg:w-full bg-white shadow-lg hover:shadow-xl border-2 border-white border-dashed hover:border-primary rounded-md">
			<figure className='pt-5 md:pt-8 lg:pt-8'><img className=' py-4 h-32 md:h-36 lg:h-48'  data-aos="zoom-in" src={image} alt="Shoes" /></figure>
			<div class="card-body p-5 md:p-8 lg:p-8">
					<h2 class="card-title">{name}</h2>
					<p className='text-justify mb-2'>{description.length > 100 ? description.slice(0,100)+'...' : description}</p>
					<p><span className='font-semibold'>Available: </span>{available_quantity}</p>
					<p><span className='font-semibold'>Minimum Order: </span>{min_quantity}</p>
					<p><span className='font-semibold'>Price: </span>${price}</p>
					<div class="card-actions justify-end">
					<button onClick={handleOrder} class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"><span>Order Now</span> <AiOutlineShoppingCart className='ml-2 text-2xl'></AiOutlineShoppingCart></button>
				</div>
			</div>
		</div>
	);
};

export default HomeTool;