/** @format */

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.css';

const About = () => {
	return (
		<div className='about center'>
			<h1>
				Hi, I am <span className='about__name'>Rishi Ganguly.</span>
			</h1>

			<h2 className='about__role'>A Front End Engineer.</h2>
			<p className='about__desc'>
				I am a self-taught frontend engineer who loves to learn new frameworks
				and libraries. I enjoy taking complex problems and producing simple
				solutions. I made three projects to showcase almost everything I know
				about frontend engineering. Recently I have been learning Next.js and
				hope to learn ExpressApi and MongoDB subsequently.
			</p>

			<div className='about__contact center'>
				<a href='https://drive.google.com/file/d/1ZVgJBGFqQrelxkVu-Zydq5VYM5Resdhi/view?usp=sharing'>
					<span type='button' className='btn btn--outline'>
						Resume
					</span>
				</a>
				<>
					<a
						href='https://github.com/TheRishG'
						aria-label='github'
						className='link link--icon'>
						<GitHubIcon />
					</a>
					<a
						href='https://www.linkedin.com/in/therishig/'
						aria-label='linkedin'
						className='link link--icon'>
						<LinkedInIcon />
					</a>
				</>
			</div>
		</div>
	);
};

export default About;
