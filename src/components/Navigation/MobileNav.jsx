import './MobileNav.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [animationClass, setAnimationClass] = useState('');

	function handleOpenMobileNav() {
		setIsVisible(true);
		setIsMobileNavOpen(true);

		setTimeout(() => {
			setAnimationClass('mobile-nav__menu_enter');
		}, 10);
	}

	function handleCloseMobileNav() {
		setAnimationClass('mobile-nav__menu_exit');
		setIsMobileNavOpen(false);

		setTimeout(() => {
			setIsVisible(false);
			setAnimationClass('');
		}, 300);
	}

	function handleToggleMobileNav() {
		if (isMobileNavOpen) {
			handleCloseMobileNav();
		} else {
			handleOpenMobileNav();
		}
	}

	return (
		<>
			<button
				className='mobile-nav__open-button'
				onClick={handleToggleMobileNav}
			/>

			{isVisible && (
				<div className={`mobile-nav__menu ${animationClass}`}>
					<div className='mobile-nav__menu-container'>
						<button
							className='mobile-nav__close-button'
							onClick={handleToggleMobileNav}
						></button>
						<NavLink className='mobile-nav__link' to='/sobre-nos'>
							Sobre
						</NavLink>
						<NavLink className='mobile-nav__link' to='/creative-cha'>
							Creative Chá
						</NavLink>
						<NavLink className='mobile-nav__link' to='/iniciativas'>
							Iniciativas
						</NavLink>
						<NavLink className='mobile-nav__link' to='/planos'>
							Planos
						</NavLink>
						<NavLink className='mobile-nav__link' to='/loja'>
							Loja
						</NavLink>
						<NavLink className='mobile-nav__link' to='/contato'>
							Contato
						</NavLink>
					</div>
				</div>
			)}
		</>
	);
};

export default MobileNav;
