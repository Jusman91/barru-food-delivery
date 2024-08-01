import {
	CustomerSay,
	Hero,
	MenuInHome,
	ServiceBanner,
} from '@/components';
import SingleMenu from '../menu/SingleMenu';
import { HEROHOME } from '@/assets';

const Home = () => {
	return (
		<section className='min-h-screen'>
			<Hero
				name='home'
				img={HEROHOME}
				textTop='Makan Sehat'
				textBottom='Penting Bagian Gaya Hidup'
			/>
			<ServiceBanner />
			<MenuInHome />
			<SingleMenu />
			<CustomerSay />
		</section>
	);
};

export default Home;
