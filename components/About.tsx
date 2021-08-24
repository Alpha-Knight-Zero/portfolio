import { domainsOfExpertise } from '../data';
import Domaincard from './Domaincard';

const Portfolio = () => {
	return (
		<div className='flex flex-col flex-grow px-4 pt-1 '>
			<p className='my-3 text-justif'>
				{`I am a Sophomore in Indian Institute of Information Technology, Pune .
					I have been doing Web Development since the begining of 2021. I like to do Machine
					Learning and Deep Learning Projects as well. Currently I am
					planning to make a website that uses tenserflow.js along
					with Next.js and PodtgreSQL.`}
			</p>
			<div
				className='flex-grow p-4 mt-5 bg-gray-400 rounded-lg dark:bg-[#0a0b1e]'
				style={{
					marginLeft: '-1.5rem',
					marginRight: '-1.5rem',
				}}
			>
				<h1 className='my-3 text-xl font-bold tracking-wide underline'>
					My Domain Expertise
				</h1>
				<div className='grid gap-5 md:grid-cols-2'>
					{domainsOfExpertise.map((domain) => (
						<div className='bg-gray-200 dark:bg-[#16181d] rounded-2xl md:col-span-1'>
							<Domaincard domain={domain} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
