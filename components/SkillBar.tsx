import { ISkill } from '../types';

const SkillBar = ({ data: { level, Icon, title } }: { data: ISkill }) => {
	return (
		<div className='my-2 hover:shadow-custom-light dark:hover:shadow-custom-dark text-white bg-gray-300 rounded-full dark:bg-[#16181d] hover:scale-110 '>
			<div
				className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-600 '
				style={{ width: level }}
			>
				<Icon className='mr-3' />
				{title}
			</div>
		</div>
	);
};

export default SkillBar;
