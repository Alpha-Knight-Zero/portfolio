import Image from 'next/image';
import { LocationMarkerIcon, FolderIcon } from '@heroicons/react/outline';

const Sidebar = () => {
	return (
		<div className='col-span-full md:col-span-3 bg-white rounded-md text-center justify-center items-center p-2'>
			<Image
				src={
					'https://avatars.githubusercontent.com/u/65271592?s=400&u=7edb3ac66593dc688402659609cb7d6f26af4051&v=4'
				}
				loading='lazy'
				layout='intrinsic'
				height={200}
				width={200}
				alt='Developer Profile Picture'
				className='rounded-full mx-auto'
			/>
			<h1 className='my-3 text-3xl font-medium tracking-wider'>
				Pushkal Pandey
			</h1>
			<p className='px-2 py-2 my-3 bg-gray-200 rounded-full font-bold'>
				Web Portfolio
			</p>
			<div className='flex justify-around my-4 md:w-full'>
				<a href='https://github.com/Alpha-Knight-Zero'>
					<Image
						className='hover:scale-110 cursor-pointer '
						src='/github-fill.svg'
						loading='lazy'
						height={36}
						width={36}
					/>
				</a>
				<a href='https://www.linkedin.com/in/pushkal-pandey/'>
					<Image
						className='hover:scale-110 cursor-pointer'
						src='/linkedin-box-fill.svg'
						loading='lazy'
						height={36}
						width={36}
					/>
				</a>
			</div>
			<a
				className='group px-2 py-2 my-3 bg-gray-200 rounded-full hover:bg-blue-200 transform transition-shadow hover:font-semibold tracking-wider items-center justify-center flex whitespace-nowrap'
				href=''
			>
				<FolderIcon className='h-6 w-6 mx-2 group-hover:scale-110' />
				My Resume
			</a>

			<a
				href='https://www.google.com/maps/search/?api=1&query=prayagraj'
				className='p-2 items-center justify-center flex font-semibold space-x-2 hover:underline'
			>
				<LocationMarkerIcon className='h-4 w-4 mr-2' />
				Prayagraj, India
			</a>

			<button
				className='bg-gradient-to-r from-green-400 to to-blue-400 w-5/12 md:w-9/12 rounded-full py-2 px-5 text-white my-2 mx-2'
				onClick={() => window.open('mailto:offpushkal@yahoo.com')}
			>
				Contact Me
			</button>
			<button className='bg-gradient-to-r from-green-400 to to-blue-400 w-5/12 md:w-9/12 rounded-full py-2 px-5 text-white my-2 mx-4'>
				Toogle Theme
			</button>
		</div>
	);
};

export default Sidebar;
