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
		<div className='items-center justify-center p-2 text-center bg-white col-span-full md:col-span-3 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
			<Image
				quality='100'
				src='/dp.jpeg'
				loading='lazy'
				layout='intrinsic'
				height={150}
				width={150}
				alt='Developer Profile Picture'
				className='mx-auto rounded-full'
			/>
			<h1 className='my-3 text-3xl font-medium tracking-wider'>
				Pushkal Pandey
			</h1>
			<p className='px-2 py-2 my-3 font-bold bg-gray-200 rounded-full dark:bg-dark-200'>
				Web Portfolio
			</p>
			<div className='flex justify-around md:p-2 md:space-x-6 '>
				<div className='flex justify-around pt-1 my-4 rounded-full md:w-full bg-gradient-to-r from-green-400 to to-blue-400'>
					<a
						target='_blank'
						href='https://github.com/Alpha-Knight-Zero'
						aria-label='Github'
						rel='noreferrer'
					>
						<Image
							quality='100'
							className='cursor-pointer hover:scale-110'
							src='/github-fill.svg'
							loading='lazy'
							height={36}
							width={36}
							layout='intrinsic'
							alt='My Github'
						/>
					</a>
				</div>
				<div className='flex justify-around pt-1 my-4 rounded-full md:w-full bg-gradient-to-r from-green-400 to to-blue-400'>
					<a
						target='_blank'
						href='https://www.linkedin.com/in/pushkal-pandey'
						area-lable='Linkedin'
						rel='noreferrer'
					>
						<Image
							quality='100'
							className='cursor-pointer hover:scale-110'
							src='/linkedin-box-fill.svg'
							loading='lazy'
							height={36}
							width={36}
							layout='intrinsic'
							alt='My LinkedIn'
						/>
					</a>
				</div>
			</div>
			<a
				target='_blank'
				className='flex items-center justify-center px-2 py-2 my-3 tracking-wider transition-shadow transform bg-gray-200 rounded-full dark:bg-dark-200 group hover:bg-blue-200 hover:font-semibold whitespace-nowrap'
				href='/Resume.pdf'
				download='Resume.pdf'
			>
				<FolderIcon className='w-6 h-6 mx-2 group-hover:scale-110' />
				Download Resume
			</a>

			<a
				target='_blank'
				href='https://www.google.com/maps/search/?api=1&query=prayagraj'
				rel='noreferrer'
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
				{theme == 'dark' ? (
					<FaRegLightbulb
						className='items-center w-12 h-12 py-2 mx-2 my-2 text-yellow-400 hover:cursor-pointer '
						onClick={changeTheme}
					/>
				) : (
					theme == 'light' && (
						<FiMoon
							className='items-center w-12 h-12 py-2 mx-2 my-2 text-black hover:cursor-pointer'
							onClick={changeTheme}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Sidebar;
