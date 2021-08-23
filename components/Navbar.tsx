import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import NavItem from './NavItem';

const Navbar = () => {
	const [page, setPage] = useState<string>('');

	const { pathname } = useRouter();

	useEffect(() => {
		pathname == '/projects'
			? setPage('Projects')
			: pathname == '/resume'
			? setPage('Resume')
			: setPage('About');
	}, []);

	return (
		<div className='flex justify-between my-2 ml-4 mr-1'>
			<div className='ml-2 text-xl font-bold text-green-400 border-b-4 border-green-500 md:text-2xl'>
				{page}
			</div>
			<div className='flex space-x-3 font-semibold md:text-lg md:space-x-8'>
				<NavItem
					page={page}
					setPage={setPage}
					route='/'
					section='About'
				/>
				<NavItem
					page={page}
					setPage={setPage}
					route='/resume'
					section='Resume'
				/>
				<NavItem
					page={page}
					setPage={setPage}
					route='/projects'
					section='Projects'
				/>
			</div>
		</div>
	);
};

export default Navbar;
