import { tech_category } from '../types';
import ProjectsNavItem from './ProjectsNavItem';

export const ProjectsNavBar = ({
	handleProjectCategory,
	active,
}: {
	handleProjectCategory: Function;
	active: tech_category | 'all';
}) => {
	return (
		<div className='sticky top-0 z-10 flex px-3 space-x-3 list-none bg-gray-100 rounded-md oveverflow-x-auto scrollbar-hide dark:bg-dark-700'>
			<ProjectsNavItem
				value='all'
				handleProjectCategory={handleProjectCategory}
				active={active}
			/>
			<ProjectsNavItem
				value='ReactJS'
				handleProjectCategory={handleProjectCategory}
				active={active}
			/>
			<ProjectsNavItem
				value='NodeJS'
				handleProjectCategory={handleProjectCategory}
				active={active}
			/>
			<ProjectsNavItem
				value='Firestore'
				handleProjectCategory={handleProjectCategory}
				active={active}
			/>
			<ProjectsNavItem
				value='Python'
				handleProjectCategory={handleProjectCategory}
				active={active}
			/>
			<ProjectsNavItem
				value='PostgreSQL'
				handleProjectCategory={handleProjectCategory}
				active={active}
			/>
			<ProjectsNavItem
				value='ML'
				handleProjectCategory={handleProjectCategory}
				active={active}
			/>
			<ProjectsNavItem
				value='DL'
				handleProjectCategory={handleProjectCategory}
				active={active}
			/>
		</div>
	);
};
