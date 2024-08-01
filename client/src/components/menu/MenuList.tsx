import { IMenuListProps } from '@/types';
import { CardMenu } from '../card';

const MenuList = ({ data }: IMenuListProps) => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 md:gap-10 pt-8'>
			{data.map((item, idx) => (
				<CardMenu
					key={idx}
					name={item.name}
					description={item.description}
					price={item.price}
					category={item.category}
					thumbnail={item.thumbnail}
					status={item.status}
					restaurant_id={''}
				/>
			))}
		</div>
	);
};

export default MenuList;
