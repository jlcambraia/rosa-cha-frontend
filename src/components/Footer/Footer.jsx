import './Footer.css';
import logo from '../../assets/images/logo/logo.png';
import whatsappIcon from '../../assets/icons/whatsapp-icon.png';
import mailIcon from '../../assets/icons/mail-icon.png';

import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__logo-container'>
					<img
						className='footer__logo'
						src={logo}
						alt='Logotipo da Agência Rosa Chá'
					/>
					<h3 className='footer__title'>Uma agência 360</h3>
				</div>
				<nav className='footer__navigation-links'>
					<NavLink className='footer__navigation-link' to='/sobre-nos'>
						Sobre a Rosa Chá
					</NavLink>
					<NavLink className='footer__navigation-link' to='/creative-cha'>
						Creative Chá
					</NavLink>
					<NavLink className='footer__navigation-link' to='/iniciativas'>
						Iniciativas
					</NavLink>
					<NavLink className='footer__navigation-link' to='/planos'>
						Planos
					</NavLink>
					<NavLink className='footer__navigation-link' to='/loja'>
						Loja
					</NavLink>
					<NavLink className='footer__navigation-link' to='/contato'>
						Contato
					</NavLink>
				</nav>
				<address className='footer__contact-information'>
					<h3 className='footer__contact-information-title'>
						Precisa de ajuda?
					</h3>
					<div className='footer__contact-information-container'>
						{' '}
						<div className='footer__contact-information-anchors'>
							<a
								className='footer__contact-information-anchor'
								href='https://wa.me/5531982406878?text=Ol%C3%A1%2C%20preciso%20de%20informações!'
							>
								<img
									className='footer__contact-information-anchor-icon'
									src={whatsappIcon}
									alt='Ícone do WhatsApp'
								/>
								31 98240-6878
							</a>
							<a
								className='footer__contact-information-anchor'
								href='mailto:contato@rosachacreativehouse.com?subject=Olá&body=Gostaria de saber mais sobre seus serviços.'
							>
								<img
									className='footer__contact-information-anchor-icon'
									src={mailIcon}
									alt='Ícone de E-mail'
								/>
								contato@rosachacreativehouse.com
							</a>
						</div>
						<div className='footer__contact-information-working-hours'>
							<h4 className='footer__contact-information-working-hours-title'>
								Horário de funcionamento:
							</h4>
							<p className='footer__contact-information-working-hours-subtitle'>
								Segunda à Sexta: 08h às 18h
							</p>
						</div>
					</div>
				</address>
			</div>
		</footer>
	);
};

export default Footer;
