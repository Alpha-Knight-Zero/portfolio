import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const Projects = () => {
	return (
		<div
			className='px-5 py-2 overflow-y-scroll scrollbar-hide'
			style={{ height: '65vh' }}
		>
			<div>navbar</div>

			<div className='relative grid grid-cols-12 gap-4 my-3'>
				{projects.map((project) => (
					<div className='col-span-12 p-2 bg-gray-200 sm:col-span-6 lg:col-span-4 dark:bg-dark-200'>
						<ProjectCard project={project} key={project.title} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
