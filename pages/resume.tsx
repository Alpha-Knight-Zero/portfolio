import { frameworksandLibraries, languages } from '../data';
import SkillBar from '../components/SkillBar';
import { motion } from 'framer-motion';
import { routeFade, slideUp } from './../animation';
import Head from 'next/head';
const resume = () => {
	return (
		<motion.div
			className='px-6 py-2'
			variants={routeFade}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<Head>
				<title>
					Pushkal Pandey | Web Development | IIIT Pune|IIT
					Pune|Fullstack
				</title>
			</Head>
			<motion.div variants={slideUp} initial='initial' animate='animate'>
				<div className='grid md:grid-cols-2 gap-x-12'>
					<div>
						<p className='my-3 text-2xl font-bold'>Education</p>
						<div>
							<p className='my-2 text-xl font-bold'>
								Computer Science Engineering
							</p>
							<p className='font-semibold'>
								Indian Institute of Information Technology, Pune
								(2020-2024)
							</p>
						</div>
					</div>
					<div>
						<p className='my-3 text-2xl font-bold'>Experience</p>
						<div className='font-semibold'>
							I have not worked in any professional/industry
							project yet.
						</div>
					</div>
				</div>
				<p className='p-3 mt-4'>
					I am currently a sophomore pursuing a Bachelor of Technology
					degree in Computer Science Engineering from Indian Institute
					of Information Technology, Pune.
				</p>
			</motion.div>

			<div className='grid gap-6 md:grid-cols-2'>
				<div>
					<p className='my-3 text-2xl font-bold'>
						{'Languages & Frameworks'}
					</p>
					<div className='my-2'>
						{languages.map((language) => (
							<SkillBar data={language} />
						))}
					</div>
				</div>
				<div>
					<p className='my-3 text-2xl font-bold'>
						{'Frameworks & Libraries'}
					</p>
					<div className='my-2'>
						{frameworksandLibraries.map((framework) => (
							<SkillBar data={framework} key={framework.title} />
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default resume;
