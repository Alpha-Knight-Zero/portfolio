import { RiComputerLine, RiDatabaseLine } from 'react-icons/ri';
import { IDomains } from './types';
import { FaServer } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import { AiOutlineApi } from 'react-icons/ai';

export const domainsOfExpertise: IDomains[] = [
	{
		title: 'Frontend Development',
		description:
			'I can use <b>HTML</b>, <b>Next.js/React.js</b> and <b>Tailwind CSS/BootStrap 5</b> to build beautiful, dark-theme encompassing and scalable Webapps.',
		Icon: RiComputerLine,
	},
	{
		title: 'Backend Development',
		description:
			'I am capable of handaling and managing databases and servers using <b>PostgreSQL</b>, <b>MySQL</b>, along with <b>Node.js</b> and <b>Express.js</b>.',
		Icon: FaServer,
	},
	{
		title: 'API Development',
		description:
			'I can develop robust REST API using <b>Node.js</b> and <b>Express.js</b>. I can also use GraphQL to develop APIs.',
		Icon: AiOutlineApi,
	},
	{
		title: 'Competitive Coding',
		description: 'I am currently a 3-star coder on CodeChef.',
		Icon: MdDeveloperMode,
	},
	{
		title: 'Machine/Deep Learning',
		description:
			'I can currently use <b>Tensorflow</b>, <b>Numpy</b>, <b>Scipy</b>,<b>Scikit Learn</b> and a host of other tools to make informative visualizations and do data analysis. I can also train many moderately-complex ML/Dl models.',
		Icon: RiDatabaseLine,
	},
	{
		title: 'More about myself...',
		description:
			'When not coding I like to read thriller / suspense novels as well as webnovels (mostly chinese). I am an avid anime watcher and sometimes indulge myself in playing FIFA.',
		Icon: RiComputerLine,
	},
];
