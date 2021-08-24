import { RiComputerLine, RiDatabaseLine } from 'react-icons/ri';
import { IDomains, ISkill } from './types';
import { FaServer } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import { AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';

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

export const languages: ISkill[] = [
	{
		title: 'C',
		level: '60%',
		Icon: BsCircleFill,
	},
	{
		title: 'C++',
		level: '70%',
		Icon: BsCircleFill,
	},
	{
		title: 'Java',
		level: '50%',
		Icon: BsCircleFill,
	},
	{
		title: 'Python',
		level: '75%',
		Icon: BsCircleFill,
	},
	{
		title: 'HTML',
		level: '85%',
		Icon: BsCircleFill,
	},

	{
		title: 'Javascript',
		level: '65%',
		Icon: BsCircleFill,
	},

	{
		title: 'SQL',
		level: '65%',
		Icon: BsCircleFill,
	},
];

export const frameworksandLibraries: ISkill[] = [
	{
		title: 'CSS',
		level: '45%',
		Icon: BsCircleFill,
	},
	{
		title: 'ReactJS',
		level: '75%',
		Icon: BsCircleFill,
	},
	{
		title: 'NextJS',
		level: '85%',
		Icon: BsCircleFill,
	},
	{
		title: 'Bootstrap',
		level: '90%',
		Icon: BsCircleFill,
	},
	{
		title: 'Tailwind',
		level: '90%',
		Icon: BsCircleFill,
	},
	{
		title: 'Scikit-Learn',
		level: '85%',
		Icon: BsCircleFill,
	},
	{
		title: 'Tenserflow',
		level: '65%',
		Icon: BsCircleFill,
	},
	{
		title: 'PostgreSQL',
		level: '75%',
		Icon: BsCircleFill,
	},
];
