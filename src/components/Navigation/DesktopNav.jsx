import './DesktopNav.css';
import { NavLink } from 'react-router-dom';

const DesktopNav = () => {
	return (
		<>
			<nav className='desktop-nav'>
				<NavLink className='desktop-nav__link' to='/sobre-nos'>
					Sobre
				</NavLink>
				<NavLink className='desktop-nav__link' to='/creative-cha'>
					Creative Chá
				</NavLink>
				<NavLink className='desktop-nav__link' to='/iniciativas'>
					Iniciativas
				</NavLink>
				<NavLink className='desktop-nav__link' to='/planos'>
					Planos
				</NavLink>
				<NavLink className='desktop-nav__link' to='/loja'>
					Loja
				</NavLink>
				<NavLink className='desktop-nav__link' to='/contato'>
					Contato
				</NavLink>
			</nav>
		</>
	);
};

export default DesktopNav;
