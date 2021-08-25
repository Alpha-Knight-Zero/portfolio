import { ISkill } from '../types';
import { motion } from 'framer-motion';

const SkillBar = ({ data: { level, Icon, title } }: { data: ISkill }) => {
	const variants = {
		initial: {
			width: 0,
		},
		animate: {
			width: level,
			transition: {
				duration: 0.4,
				type: 'spring',
				damping: 10,
				stiffness: 100,
			},
		},
	};

	return (
		<div className='my-2 text-white bg-gray-300 rounded-full hover:shadow-custom-light dark:hover:shadow-custom-dark dark:bg-dark-200 hover:scale-110 '>
			<motion.div
				className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-600 '
				style={{ width: level }}
				variants={variants}
				initial='initial'
				animate='animate'
			>
				<Icon className='mr-3' />
				{title}
			</motion.div>
		</div>
	);
};

export default SkillBar;
