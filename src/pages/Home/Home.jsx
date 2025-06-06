import './Home.css';
import Hero from '../../components/Hero/Hero';
import Icons from './components/Icons/Icons';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Initiatives from './components/Initiatives/Initiatives';

const Home = () => {
	return (
		<main className='home'>
			<Hero />
			<Icons />
			<Feedbacks />
			<Initiatives />
		</main>
	);
};

export default Home;
