import { motion } from 'framer-motion';
import { routeFade, slideUp, staggerUp } from '../animation';
import { domainsOfExpertise } from '../data';
import Domaincard from './Domaincard';

const About = () => {
	return (
		<motion.div
			className='flex flex-col flex-grow px-4 pt-1 '
			variants={routeFade}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<p className='my-3 text-justif'>
				{`I am a Sophomore in Indian Institute of Information Technology, Pune .
					I have been doing Web Development since the begining of 2021. I like to do Machine
					Learning and Deep Learning Projects as well. Currently I am
					planning to make a website that uses tenserflow.js along
					with Next.js and PodtgreSQL.`}
			</p>
			<h1 className='items-center my-3 ml-2 text-xl font-bold text-green-400 underline border-green-500 md:text-2xl'>
				My Domain Expertise
			</h1>
			<motion.div
				className='flex-grow p-4 bg-gray-400 rounded-lg dark:bg-dark-100'
				style={{
					marginLeft: '-1.5rem',
					marginRight: '-1.5rem',
				}}
				variants={staggerUp}
				initial='initial'
				animate='animate'
			>
				<div className='grid gap-5 md:grid-cols-2'>
					{domainsOfExpertise.map((domain) => (
						<motion.div
							variants={slideUp}
							className='bg-gray-200 dark:bg-dark-200 rounded-2xl md:col-span-1 hover:scale-105 hover:shadow-custom-light dark:hover:shadow-custom-dark'
						>
							<Domaincard domain={domain} key={domain.title} />
						</motion.div>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default About;
