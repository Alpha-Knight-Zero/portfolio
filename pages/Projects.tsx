import { motion } from 'framer-motion';
import { useState } from 'react';
import { routeFade, slideUp, staggerUp } from '../animation';
import ProjectCard from '../components/ProjectCard';
import { ProjectsNavBar } from '../components/ProjectsNavBar';
import { projects } from '../data';
import { tech_category } from '../types';

const project = () => {
	const [project_cat, setProject_cat] = useState(projects);
	const [active, setActive] = useState<tech_category | 'all'>('all');

	const [clicked, setClicked] = useState<string>('');

	const handleProjectCategory = (category: tech_category | 'all') => {
		setActive(category);
		if (category == 'all') {
			setProject_cat(projects);
		} else {
			const filteredProjects = projects.filter((project) =>
				project.category.includes(category)
			);
			setProject_cat(filteredProjects);
		}

		return;
	};

	return (
		<motion.div
			className='px-5 pb-2 mt-4 overflow-y-scroll scrollbar-hide'
			style={{ height: '65vh' }}
			variants={routeFade}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<ProjectsNavBar
				handleProjectCategory={handleProjectCategory}
				active={active}
			/>

			<motion.div
				className='relative grid grid-cols-12 gap-4 my-3'
				variants={staggerUp}
				initial='initial'
				animate='animate'
			>
				{project_cat.map((project) => (
					<motion.div
						className='col-span-12 p-2 bg-gray-200 rounded-xl sm:col-span-6 lg:col-span-4 dark:bg-dark-200 '
						variants={slideUp}
					>
						<ProjectCard
							project={project}
							key={project.title}
							clicked={clicked}
							setClicked={setClicked}
						/>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default project;
