import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
	const [user, loading, error] = useAuthState(auth);
	const {data:orders} = useQuery(['myorders', user], () => {
		return fetch(`http://localhost:5000/myorders/${user.email}`,{
			method: 'GET'
		})
		.then(res => {
			console.log('res: ',res);
			return res.json();
		})
	})
	if(loading || !orders) {
		return <Loading></Loading>;
	}
	let ordersInReverse = [];
	ordersInReverse = [...orders];
	ordersInReverse = ordersInReverse.reverse();

	return (
		<div>
			<h2 className='text-center text-accent text-xl my-2 font-semibold'>My Orders</h2>
			<div class="overflow-x-auto mx-4">

				<table class="table table-compact w-full ">
					<thead>
					<tr>
						<th></th>
						<th>Tools Image</th> 
						<th>Tools Name</th> 
						<th>Shipping Address</th> 
						<th>Quantity | Price</th> 
						<th>Pay Status</th> 
						<th>Order Action</th>
					</tr>
					</thead> 
					<tbody>
						{
							ordersInReverse.map((order,index) => <MyOrderRow 
								key={order._id}
								order={order}
								index={index}
							></MyOrderRow>)
						}	
						
					</tbody> 
					<tfoot>
					{/* <tr>
						<th></th> 
						<th>Name</th> 
						<th>Job</th> 
						<th>company</th> 
						<th>location</th> 
						<th>Last Login</th> 
						<th>Favorite Color</th>
					</tr> */}
					</tfoot>
				</table>
			</div>
			
		</div>
	);
};

export default MyOrders;