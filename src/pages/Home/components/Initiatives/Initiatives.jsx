import './Initiatives.css';
import initiatives from '../../../../data/mocks/initiatives';
import starIcon from '../../../../assets/icons/placeholders/star-icon.png';

const Initiatives = () => {
	return (
		<section className='initiatives'>
			<div className='initiatives__title-container'>
				<img
					className='initiatives__title-container-image'
					src={starIcon}
					alt='Ícone de estrela'
				/>
				<h2 className='initiatives__title'>Iniciativas com propósito</h2>
				<img
					className='initiatives__title-container-image'
					src={starIcon}
					alt='Ícone de estrela'
				/>
			</div>
			<p className='initiatives__subtitle'>
				unindo estratégia, sensibilidade e impacto real
			</p>
			<ul className='initiatives__grid'>
				{initiatives.map((image, index) => (
					<li key={index} className='initiatives__grid-image'>
						<img
							className='initiatives__grid-image-image'
							src={image.url}
							alt={image.alt}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Initiatives;
