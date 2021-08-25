import Link from 'next/link';
import  { ReactElement } from 'react';

const NavItem = ({
	page,
	setPage,
	section,
	route,
}: {
	page: string;
	setPage: Function;
	section: string;
	route: string;
}): ReactElement | null => {
	return page != section ? (
		<div className='hover:text-red-400 hover:scale-110'>
			<Link href={route}>
				<a onClick={() => setPage(section)}>{section}</a>
			</Link>
		</div>
	) : null;
};

export default NavItem;
