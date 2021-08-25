import { tech_category } from './../types';

const ProjectsNavItem = ({
	value,
	handleProjectCategory,
	active,
}: {
	value: tech_category | 'all';
	handleProjectCategory: Function;
	active: tech_category | 'all';
}) => {
	return active == value ? (
		<li
			className='text-green-500 capitalize border-b-2 border-green-700 cursor-pointer '
			onClick={() => handleProjectCategory(value)}
		>
			{value}
		</li>
	) : (
		<li
			className='capitalize cursor-pointer hover:text-green-400'
			onClick={() => handleProjectCategory(value)}
		>
			{value}
		</li>
	);
};

export default ProjectsNavItem;
