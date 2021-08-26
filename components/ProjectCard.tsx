import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { staggerUp, slideUp } from '../animation';
import { IProject } from '../types';

const ProjectCard = ({
	project: {
		deployment_url,
		description,
		key_techs,
		repo_url,
		thumbnail,
		title,
	},
	clicked,
	setClicked,
}: {
	project: IProject;
	clicked: string;
	setClicked: Function;
}) => {
	return (
		<div className='group'>
			<Image
				quality='85'
				src={thumbnail}
				alt={title}
				className='cursor-pointer '
				loading='lazy'
				layout='responsive'
				height={90}
				width={160}
				onClick={() => setClicked(title)}
			/>
			<p className='my-2 text-center group-hover:font-bold'>{title}</p>
			{clicked == title && (
				<div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-xl md:p-10 md:grid-cols-2 gap-x-12 dark:bg-dark-100 dark:text-white'>
					<motion.div 
						variants={staggerUp}
						initial='initial'
						animate='animate'
					>
						<motion.div variants={slideUp} className="border-4 border-gray-100">
							<Image
								quality='85'
								src={thumbnail}
								alt={title}
								className='cursor-pointer'
								loading='lazy'
								height={180}
								width={320}
								layout='responsive'
							/>
						</motion.div>

						<motion.div
							variants={slideUp}
							className='flex justify-center my-4 space-x-3 '
						>
							<a
								href={repo_url}
								target="_blank"
								className='flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200'
							>
								<AiFillGithub /> <span>Github</span>
							</a>
							<a
								href={deployment_url}
								target="_blank"
								className='flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200'
							>
								<AiFillProject />
								<span>Project</span>
							</a>
						</motion.div>
					</motion.div>

					<motion.div
						variants={staggerUp}
						initial='initial'
						animate='animate'
					>
						<motion.div variants={slideUp}>
							<p className='mb-3 text-xl font-medium md:text-2xl'>
								{title}
							</p>
							<p className='mb-3 font-medium '>{description}</p>
						</motion.div>

						<motion.div
							variants={slideUp}
							className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'
						>
							{key_techs.map((tech) => (
								<span
									key={tech}
									className='px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200'
								>
									{tech}
								</span>
							))}
						</motion.div>
					</motion.div>

					<button className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200 hover:scale-105'>
						<MdClose size={30} onClick={() => setClicked('')} />
					</button>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
