import React, { createFactory } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyOrderRow = ({order, index, refetch}) => {
	
	const HandleOrderCancel = () => {
		// const {data} = useQuery('ancelOrder', () => {
		// 	return fetch(`http://localhost:5000/myorders/${order._id}`,{
		// 		method: 'DELETE',
		// 		headers:{
		// 			'content-type':'application/json'
		// 		}
		// 	})
		// 	.then(res => {
		// 		console.log(res);
		// 		res.json();
		// 	});
		// })
		Swal.fire({
			title: 'Are you sure?',
			text: `Cancel the order: ${order.tools_name}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Proceed'
		  }).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/myorders/${order._id}`,{
					method: 'DELETE',
					headers:{
						'content-type':'application/json'
					}
				})
				.then(res => {
					console.log(res);
					return res.json();
				})
				.then(data => {
					if(data?.acknowledged){
						refetch();
					}
				})
			
			  Swal.fire(
				'Deleted!',
				`Your Order ${order.tools_name} is canceled`,
				'success'
			  )
			}
		  })
		
	}

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
				{(order.paid)?<button disabled className='btn btn-success btn-xs px-3 text-white'>Paid</button> :
					<Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success btn-xs px-3 text-white'>Pay Now</button></Link>
				}
			</td> 
			<td>
				{
					(order.paid) ?
					<button className='btn btn-primary btn-xs px-3 text-white'>Processing</button>
					
					:
					<button onClick={HandleOrderCancel} className='btn btn-neutral btn-xs px-3 text-white'>Cancel</button>
				}
			</td>
		</tr>
	);
};

export default MyOrderRow;