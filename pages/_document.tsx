import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta
						name='description'
						content='Sophomore in IIIT Pune. Pushkal Pandey'
					/>
					<meta
						name='keywords'
						content='Pushkal Pandey,Web development,fullstack,IIIT Pune '
					/>
				</Head>
				<body className='bg-fixed bg-gradient-to-r from-green-400 to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
