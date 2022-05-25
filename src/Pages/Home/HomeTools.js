import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import HomeTool from './HomeTool';

const HomeTools = () => {
	const [tools, setTools] = useState([]);
	const [loading, setLoading] = useState(true);
	let toolWithSkip;
	useEffect( () =>{
		fetch('http://localhost:5000/tools')
		.then(res => res.json())
		.then(data => {
			setTools(data);
			setLoading(false);
		})
	},[]);

	if(loading){
		return <Loading></Loading>;
	}


	let toolWthReverse = [...tools];
	toolWthReverse = toolWthReverse.reverse();

	
	toolWithSkip = toolWthReverse.slice(0,6);

	return (
		<>
			{
				toolWithSkip ?
				<div className='my-20 mx-auto px-6 md:px-10 lg:px-10 max-w-screen-2xl'>
					<h2 className='text-center text-5xl font-bold mb-4'>Our Tools</h2>
					<p className='text-center text-xl text-slate-400 mb-20'>Chose your favourite tools</p>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
						{
							toolWithSkip.map(tool => <HomeTool
								key={tool._id}
								tool={tool}
							></HomeTool>)
						}
					</div>
				</div>
				:
				<Loading></Loading>
			}
		</>
		
	);
};

export default HomeTools;