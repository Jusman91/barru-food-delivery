import { mockDataRestaurants } from '@/static/mockData';
import { useParams } from 'react-router-dom';

const DetailRestaurant = () => {
	const { id } = useParams();
	const restaurant = mockDataRestaurants.filter(
		(item) => item.owner_id === id,
	);
	console.log(restaurant);
	return <section></section>;
};

export default DetailRestaurant;
