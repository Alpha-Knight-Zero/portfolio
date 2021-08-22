import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Portfolio from '../components/Portfolio';
import Sidebar from '../components/Sidebar';

const index = ({ domains }: { domains: object }) => {
	return (
		<div>
			<Head>
				<title>Pushkal Pandey</title>
				<meta
					name='Pushkal Pandey - Web Portfolio'
					content='Created by Pushkal Pandey'
				/>
			</Head>

			<div className='grid grid-cols-12 px-6 my-4 gap-7 md:gap-4 '>
				<Sidebar />
				<Portfolio />
			</div>
		</div>
	);
};

export default index;

// export const getStaticProps = async (context: GetStaticPropsContext) => {
// 	const res = await fetch('http://localhost:3000/api/domains');
// 	if (res) {
// 		const data = await res.json();
// 		return {
// 			props: {
// 				domains: data.domainsOfExpertise,
// 			},
// 		};
// 	}
// 	console.log('No response received from "domains" endpoint.');
// 	return;
// };
