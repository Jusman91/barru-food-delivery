import {
	CustomerSay,
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
			<CustomerSay />
		</section>
	);
};

export default Home;
