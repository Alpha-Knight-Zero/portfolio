import { RiComputerLine, RiDatabaseLine } from 'react-icons/ri';
import { IDomains, IProject, ISkill } from './types';
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
		level: '65%',
		Icon: BsCircleFill,
	},
	{
		title: 'C++',
		level: '60%',
		Icon: BsCircleFill,
	},
	{
		title: 'Java',
		level: '40%',
		Icon: BsCircleFill,
	},
	{
		title: 'Python',
		level: '70%',
		Icon: BsCircleFill,
	},
	{
		title: 'HTML',
		level: '80%',
		Icon: BsCircleFill,
	},

	{
		title: 'Javascript',
		level: '55%',
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
		level: '65%',
		Icon: BsCircleFill,
	},
	{
		title: 'NextJS',
		level: '70%',
		Icon: BsCircleFill,
	},
	{
		title: 'Bootstrap',
		level: '80%',
		Icon: BsCircleFill,
	},
	{
		title: 'Tailwind',
		level: '80%',
		Icon: BsCircleFill,
	},
	{
		title: 'Framer',
		level: '30%',
		Icon: BsCircleFill,
	},
	{
		title: 'Scikit-Learn',
		level: '75%',
		Icon: BsCircleFill,
	},
	{
		title: 'Tenserflow',
		level: '60%',
		Icon: BsCircleFill,
	},
	{
		title: 'PostgreSQL',
		level: '65%',
		Icon: BsCircleFill,
	},
];

export const projects: IProject[] = [
	{
		title: 'Googol',
		repo_url: 'https://github.com/Alpha-Knight-Zero/googol',
		thumbnail: '/thumbnails/Googol.png',
		category: ['ReactJS'],
		deployment_url: 'https://googol-alpha-knight-zero.vercel.app',
		description: 'A frontend that uses Google API to give search results.',
		key_techs: ['NextJS', 'TailwindCSS', 'TypeScript'],
	},
	{
		title: 'Web Portfolio',
		repo_url: 'https://github.com/Alpha-Knight-Zero/portfolio',
		thumbnail: '/thumbnails/Portfolio.png',
		category: ['ReactJS'],
		deployment_url: 'https://portfolio-three-weld.vercel.app/',
		description: 'My Web Porfolio. ',
		key_techs: ['NextJS', 'TailwindCSS', 'TypeScript', 'Framer'],
	},
// 	{
// 		title: 'Bloogg',
// 		repo_url: 'https://github.com/Alpha-Knight-Zero/blogr-nextjs-prisma',
// 		thumbnail: '/thumbnails/Prisma_blog.png',
// 		category: ['ReactJS', 'PostgreSQL'],
// 		deployment_url: 'https://blogr-nextjs-prisma-theta.vercel.app/',
// 		description:
// 			'A barebones blog site that has user authentication and is connected to an SQL database.',
// 		key_techs: ['NextJS', 'Prisma', 'PostgreSQL', 'NextAuth', 'TypeScript'],
// 	},
	{
		title: 'Hulu-PP',
		repo_url: 'https://github.com/Alpha-Knight-Zero/hulu-pp',
		thumbnail: '/thumbnails/Hulupp.png',
		category: ['ReactJS'],
		deployment_url: 'https://hulu-frontend-yt.vercel.app/',
		description:
			'A frontend that uses Hulu API to to emulate Hulu website frontend.',
		key_techs: ['NextJS', 'TailwindCSS'],
	},
	{
		title: 'Fb-Home-Clone',
		repo_url: 'https://github.com/Alpha-Knight-Zero/facebook-home-2',
		thumbnail: '/thumbnails/FbHC.png',
		category: ['ReactJS', 'Firestore'],
		deployment_url:
			'https://facebook-home-clone-9tchxg4dg-alpha-knight-zero.vercel.app/',
		description:
			'A frontend clone of facebook homepage that has user authentication from facebook account.Uses firestore to store posts that are made.',
		key_techs: [
			'NextJS',
			'TailwindCSS',
			'FireStore',
			'NextAuth',
			'TypeScript',
		],
	},
];
