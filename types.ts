import { IconType } from 'react-icons';

export interface IDomains {
	title: string;
	description: string;
	Icon: IconType;
}

export interface ISkill {
	title: string;
	level: string;
	Icon: IconType;
}

export type tech_category =
	| 'ReactJS'
	| 'NodeJS'
	| 'PostgreSQL'
	| 'ML'
	| 'DL'
	| 'Python'
	| 'Firestore';

export interface IProject {
	title: string;
	description: string;
	thumbnail: string;
	deployment_url: string;
	repo_url: string;
	category: tech_category[];
	key_techs: string[];
}
