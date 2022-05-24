import React from 'react';

const MyOrderRow = ({order, index}) => {
	return (
		<tr>
			<th>{index+1}</th>
			<td>
				{/* <img className='w-' src={order.tools_image} alt="" /> */}
				<div class="avatar">
					<div class="w-16 rounded">
						<img src={order.tools_image} alt="Tailwind-CSS-Avatar-component" />
					</div>
				</div>	
			</td> 
			<td>{order.tools_name}</td> 
			<td className=''>
				<div className='w-96'>
					<p className='overflow-x-auto'>{order.address}</p>
				</div>
			</td>
			<td>({order.quantity}) | (${parseInt(order.quantity) * parseInt(order.tools_price)})</td> 
			<td>
				<button className='btn btn-success btn-xs px-3 text-white'>Pay Now</button>
			</td> 
			<td>
				<button className='btn btn-neutral btn-xs px-3 text-white'>Cancel</button>
			</td>
		</tr>
	);
};

export default MyOrderRow;