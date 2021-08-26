import Head from 'next/head';
import About from '../components/About';

const index = ({ domains }: { domains: object }) => {
	return (
		<div>
			<Head>
				<title>
					Pushkal Pandey | Web Development | IIIT Pune
				</title>
				
			</Head>

			<About />
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
