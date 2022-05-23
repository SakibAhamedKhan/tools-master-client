import React, { useEffect, useState } from 'react';
import HomeTool from './HomeTool';

const HomeTools = () => {
	const [tools, setTools] = useState([]);
	let toolWithSkip;
	useEffect( () =>{
		fetch('tools.json')
		.then(res => res.json())
		.then(data => {
			setTools(data);
		})
	},[]);
	toolWithSkip = tools.slice(0,6);
	return (
		<div className='my-20 mx-auto px-10 max-w-screen-2xl'>
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
	);
};

export default HomeTools;