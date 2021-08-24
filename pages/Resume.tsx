import { frameworksandLibraries, languages } from '../data';
import SkillBar from '../components/SkillBar';

const Resume = () => {
	return (
		<div className='px-6 py-2'>
			<div className='grid md:grid-cols-2 gap-x-12'>
				<div>
					<p className='my-3 text-2xl font-bold'>Education</p>
					<div>
						<p className='my-2 text-xl font-bold'>
							Computer Science Engineering
						</p>
						<p className='font-semibold'>
							Indian Institute of Information Technology, Pune
							(2020-2024)
						</p>
					</div>
				</div>
				<div>
					<p className='my-3 text-2xl font-bold'>Experience</p>
					<div className='font-semibold'>
						I have not worked in any professional/industry project
						yet.
					</div>
				</div>
			</div>
			<p className='p-3 mt-4'>
				I am currently a sophomore pursuing a Bachelor of Technology
				degree in Computer Science Engineering from Indian Institute of
				Information Technology, Pune.
			</p>

			<div className='grid gap-6 md:grid-cols-2'>
				<div>
					<p className='my-3 text-2xl font-bold'>
						{'Languages & Frameworks'}
					</p>
					<div className='my-2'>
						{languages.map((language) => (
							<SkillBar data={language} />
						))}
					</div>
				</div>
				<div>
					<p className='my-3 text-2xl font-bold'>
						{'Frameworks & Libraries'}
					</p>
					<div className='my-2'>
						{frameworksandLibraries.map((framework) => (
							<SkillBar data={framework} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
Resume;
