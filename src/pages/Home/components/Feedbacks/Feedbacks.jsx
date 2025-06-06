import './Feedbacks.css';
import mockFeedbacks from '../../../../data/mocks/feedbacks.js';
import Card from '../../../../components/Card/Card.jsx';
import { useRef } from 'react';

const Feedbacks = () => {
	const listRef = useRef(null);
	const cardRef = useRef(null);

	const scrollLeft = () => {
		const cardWidth = cardRef.current.offsetWidth + 20;
		listRef.current.scrollLeft -= cardWidth;
	};

	const scrollRight = () => {
		const cardWidth = cardRef.current.offsetWidth + 20;
		listRef.current.scrollLeft += cardWidth;
	};

	return (
		<section className='feedbacks'>
			<h2 className='feedbacks__title'>Feedbacks</h2>
			<p className='feedbacks__subtitle'>
				o que alguns clientes falaram da Rosa Chá
			</p>
			<div className='feedbacks__content'>
				<ul className='feedbacks__list' ref={listRef}>
					{mockFeedbacks.map((feedback, index) => (
						<Card
							key={index}
							feedback={feedback}
							ref={index === 0 ? cardRef : null}
						/>
					))}
				</ul>
				<button className='feedbacks__button-left' onClick={scrollLeft} />
				<button className='feedbacks__button-right' onClick={scrollRight} />
			</div>
		</section>
	);
};

export default Feedbacks;
