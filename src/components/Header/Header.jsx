import './Header.css';
import logo from '../../assets/images/logo/logo.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopNav from '../Navigation/DesktopNav';
import MobileNav from '../Navigation/MobileNav';

const Header = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

	const navigate = useNavigate();

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 700);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect;

	return (
		<header className='header'>
			<div className='header__top-bar'></div>
			<div className='header__container'>
				<img
					className='header__logo'
					src={logo}
					alt='Logotipo da Agência Rosa Chá'
					onClick={() => navigate('/')}
				/>
				{!isMobile && <DesktopNav />}
				{isMobile && <MobileNav />}
			</div>
		</header>
	);
};

export default Header;
