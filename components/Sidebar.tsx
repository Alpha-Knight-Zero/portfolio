import Image from 'next/image';
import { LocationMarkerIcon, FolderIcon } from '@heroicons/react/outline';

const Sidebar = () => {
	return (
		<div className='items-center justify-center p-2 text-center bg-white col-span-full md:col-span-3 rounded-2xl'>
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
			<p className='px-2 py-2 my-3 font-bold bg-gray-200 rounded-full'>
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
				className='flex items-center justify-center px-2 py-2 my-3 tracking-wider transition-shadow transform bg-gray-200 rounded-full group hover:bg-blue-200 hover:font-semibold whitespace-nowrap'
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
				className='w-5/12 px-5 py-2 mx-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to to-blue-400 md:w-9/12'
				onClick={() => window.open('mailto:offpushkal@yahoo.com')}
			>
				Contact Me
			</button>
			<button className='w-5/12 px-5 py-2 mx-4 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to to-blue-400 md:w-9/12'>
				Toogle Theme
			</button>
		</div>
	);
};

export default Sidebar;
