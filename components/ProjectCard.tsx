import Image from 'next/image';
import { useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from '../types';

const ProjectCard = ({
	project: {
		category,
		deployment_url,
		description,
		key_techs,
		repo_url,
		thumbnail,
		title,
	},
}: {
	project: IProject;
}) => {
	const [clicked, setClicked] = useState(false);
	return (
		<div className=''>
			<Image
				src={thumbnail}
				alt={title}
				className='cursor-pointer'
				loading='lazy'
				layout='responsive'
				height={90}
				width={160}
				onClick={() => setClicked(true)}
			/>
			<p className='my-2 text-center'>{title}</p>
			{clicked && (
				<div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-sm md:grid-cols-2 gap-x-12 dark:bg-dark-100 dark:text-white'>
					<div>
						<Image
							src={thumbnail}
							alt={title}
							className='cursor-pointer'
							loading='lazy'
							height={36}
							width={36}
						/>
						<div className='flex justify-center my-4 space-x-3 '>
							<a
								href={repo_url}
								className='flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200'
							>
								<AiFillGithub /> <span>Github</span>
							</a>
							<a
								href={deployment_url}
								className='flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200'
							>
								<AiFillProject />
								<span>Project</span>
							</a>
						</div>
					</div>

					<div>
						<p className='mb-3 text-xl font-medium md:text-2xl'>
							{title}
						</p>
						<p className='mb-3 font-medium '>{description}</p>

						<div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
							{key_techs.map((tech) => (
								<span
									key={tech}
									className='px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200'
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					<button className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200 hover:scale-105'>
						<MdClose size={30} onClick={() => setClicked(false)} />
					</button>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
