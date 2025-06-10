import './Icons.css';
import mockIcons from '../../../../data/mocks/icons.js';

const Icons = () => {
	return (
		<section className='icons'>
			<div className='icons__container'>
				<ul className='icons__list'>
					{mockIcons.map((icon, index) => (
						<li className='icon__container' key={index}>
							<img className='icon__image' src={icon.url} alt={icon.alt} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Icons;
