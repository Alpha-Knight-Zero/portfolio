import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ThemeProvider attribute='class' defaultTheme='system'>
			<div className='grid grid-cols-12 px-6 my-4 gap-7 md:gap-4 '>
				<Sidebar />
				<div className='flex flex-col px-2 bg-white rounded-2xl col-span-full md:col-span-9 dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
					<Navbar />

					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</div>
			</div>
		</ThemeProvider>
	);
}
export default MyApp;
