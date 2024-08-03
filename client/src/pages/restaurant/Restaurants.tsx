import { HERO_RESTAURANT } from '@/assets';
import { CardRestaurant, Hero } from '@/components';
import { mockDataRestaurants } from '@/static/mockData';

const Restaurants = () => {
	return (
		<section>
			<Hero
				name='restaurants'
				img={HERO_RESTAURANT}
				textTop='Bermitra '
				textBottom='Dengan Kami'
			/>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-14 py-8 lg:py-16'>
				{mockDataRestaurants ? (
					mockDataRestaurants.map((item, idx) => (
						<CardRestaurant
							key={idx}
							name={item.name}
							thumbnail={item.thumbnail}
							address={item.address}
							phone={item.phone}
							owner_id={item.owner_id}
						/>
					))
				) : (
					<div>No Data</div>
				)}
			</div>
		</section>
	);
};

export default Restaurants;
