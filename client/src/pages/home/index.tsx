import {
	HeroHome,
	MenuInHome,
	ServiceBanner,
} from '@/components';

const Home = () => {
	return (
		<section>
			<HeroHome />
			<ServiceBanner />
			<MenuInHome />
		</section>
	);
};

export default Home;
