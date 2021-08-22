import { FunctionComponent } from 'react';
import { IDomains } from '../types';

const Domaincard: FunctionComponent<{ domain: IDomains }> = ({
	domain: { description, Icon, title },
}) => {
	const createMarkUp = () => {
		return {
			__html: description,
		};
	};

	return (
		<div className='flex flex-col space-x-4 '>
			<div className='flex flex-row items-center justify-around mt-1'>
				<Icon className='w-12 h-12 text-green-400 ' />
				<div>
					<h1 className='font-bold underline'>{title}</h1>
				</div>
			</div>
			<div className='pt-2 pb-1 pl-4 pr-2'>
				<p dangerouslySetInnerHTML={createMarkUp()} />
			</div>
		</div>
	);
};

export default Domaincard;
