import './Card.css';

const Card = ({ feedback, ref }) => {
	return (
		<li className='card__container' ref={ref}>
			<img className='card__image' src={feedback.url} alt={feedback.alt} />
			<div className='card__text-container'>
				<p className='card__author'>{feedback.author}</p>
				<p className='card__text'>{feedback.text}</p>
			</div>
		</li>
	);
};

export default Card;
