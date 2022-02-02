/** @format */

import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
	return (
		<header className='header center'>
			<h3>
				<a href='https://github.com/TheRishG' className='link'>
					RG.
				</a>
			</h3>
			<Navbar />
		</header>
	);
};

export default Header;
