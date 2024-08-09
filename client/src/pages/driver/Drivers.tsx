import { HERO_DRIVER } from '@/assets';
import { CardDriver, Hero } from '@/components';
import { mockDataDrivers } from '@/static/mockData';
import DetailDriver from './DetailDriver';

const Drivers = () => {
	return (
		<section>
			<Hero
				name='drivers'
				img={HERO_DRIVER}
				textTop='Mengantar'
				textBottom='Bersama Kami'
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-6'>
				{mockDataDrivers.map((item, idx) => (
					<CardDriver key={idx} data={item} />
				))}
			</div>
			<DetailDriver />
		</section>
	);
};

export default Drivers;
