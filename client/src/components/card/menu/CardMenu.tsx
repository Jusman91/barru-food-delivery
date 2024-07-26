import { Image } from '../../elements';
import { ICardMenuProps } from '@/types';
import CardDetailMenu from './CardDetailMenu';
import OrderBtn from './OrderBtn';
import InfoBtn from './InfoBtn';
import { useToggle } from '@/hooks';
import { cn } from '@/lib/utils';

const CardMenu = ({
	name,
	price,
	status,
	category,
	description,
	thumbnail,
	restaurant_id,
}: ICardMenuProps) => {
	const [show, toggleShow] = useToggle();
	const checkStatus =
		status === 1 ? 'tersedia' : 'tidak tersedia';

	return (
		<div className='card-menu relative h-[400px] mx-2 p-1 rounded-3xl shadow-glass-sm opacity-100 md:opacity-70'>
			<Image
				src={thumbnail}
				alt={name}
				className='w-full h-full rounded-3xl'
			/>
			<div className='absolute bottom-6 px-6 text-white'>
				<div className='text-clamp-h3 font-bold'>
					<h1>{name}</h1>
					<p>{`IDR ${price}`}</p>
					<p className='capitalize text-green-500'>
						{checkStatus}
					</p>
				</div>
				<OrderBtn onClick={() => {}} />
			</div>
			<InfoBtn onClick={() => toggleShow()} />
			<div
				className={cn(
					'w-1/2 bg-white absolute top-10 right-12 shadow-glass-sm opacity-0',
					show ? 'opacity-100 z-[200]' : '',
				)}>
				<CardDetailMenu
					name={name}
					description={description}
					price={price}
					category={category}
					thumbnail={thumbnail}
					status={checkStatus as unknown as number}
					restaurant_id={restaurant_id}
				/>
			</div>
		</div>
	);
};

export default CardMenu;
