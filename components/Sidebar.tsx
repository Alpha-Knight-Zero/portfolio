import Image from 'next/image';
import { LocationMarkerIcon, FolderIcon } from '@heroicons/react/outline';
import { FaRegLightbulb } from 'react-icons/fa';
import { FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const Sidebar = () => {
	const { theme, setTheme } = useTheme();

	const changeTheme = () => {
		theme == 'dark' ? setTheme('light') : setTheme('dark');
	};

	return (
		<div className='items-center justify-center p-2 text-center bg-white col-span-full md:col-span-3 rounded-2xl dark:bg-[#0f1115] shadow-custom-light dark:shadow-custom-dark'>
			<Image
				src={
					'https://avatars.githubusercontent.com/u/65271592?s=400&u=7edb3ac66593dc688402659609cb7d6f26af4051&v=4'
				}
				loading='lazy'
				layout='intrinsic'
				height={200}
				width={200}
				alt='Developer Profile Picture'
				className='mx-auto rounded-full'
			/>
			<h1 className='my-3 text-3xl font-medium tracking-wider'>
				Pushkal Pandey
			</h1>
			<p className='px-2 py-2 my-3 font-bold bg-gray-200 rounded-full dark:bg-[#16181d]'>
				Web Portfolio
			</p>
			<div className='flex justify-around my-4 md:w-full'>
				<a href='https://github.com/Alpha-Knight-Zero'>
					<Image
						className='cursor-pointer hover:scale-110 '
						src='/github-fill.svg'
						loading='lazy'
						height={36}
						width={36}
					/>
				</a>
				<a href='https://www.linkedin.com/in/pushkal-pandey/'>
					<Image
						className='cursor-pointer hover:scale-110'
						src='/linkedin-box-fill.svg'
						loading='lazy'
						height={36}
						width={36}
					/>
				</a>
			</div>
			<a
				className='flex items-center justify-center px-2 py-2 my-3 tracking-wider transition-shadow transform bg-gray-200 rounded-full dark:bg-[#16181d] group hover:bg-blue-200 hover:font-semibold whitespace-nowrap'
				href=''
			>
				<FolderIcon className='w-6 h-6 mx-2 group-hover:scale-110' />
				My Resume
			</a>

			<a
				href='https://www.google.com/maps/search/?api=1&query=prayagraj'
				className='flex items-center justify-center p-2 space-x-2 font-semibold hover:underline'
			>
				<LocationMarkerIcon className='w-4 h-4 mr-2' />
				Prayagraj, India
			</a>

			<button
				className='w-5/12 px-5 py-2 mx-2 mt-2 text-white rounded-full bg-gradient-to-r from-green-400 to to-blue-400 md:w-9/12'
				onClick={() => window.open('mailto:offpushkal@yahoo.com')}
			>
				Contact Me
			</button>
			<div className='flex justify-around my-4'>
				{theme == 'dark' && (
					<FaRegLightbulb
						className='items-center w-12 h-12 py-2 mx-2 my-2 text-yellow-400 hover:cursor-pointer '
						onClick={changeTheme}
					/>
				)}
				{theme == 'light' && (
					<FiMoon
						className='items-center w-12 h-12 py-2 mx-2 my-2 text-black hover:cursor-pointer'
						onClick={changeTheme}
					/>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
