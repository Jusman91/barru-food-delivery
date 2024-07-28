import { ICardMenuProps } from '@/types';
import { Image } from '../../elements';

const CardDetailMenu = ({
	name,
	description,
	category,
	price,
	status,
	thumbnail,
	restaurant_id,
}: ICardMenuProps) => {
	return (
		<div className='w-full h-full p-2'>
			<Image
				src={thumbnail}
				alt={name}
				className='w-full h-32'
			/>
			<div className='text-sm md:text-md text-color-base leading-6'>
				<h3 className='text-clamp-h6'>{name}</h3>
				<div>
					<strong>Keterangan:</strong> {description}
				</div>
				<div className='capitalize'>
					<strong>Kategori:</strong> {category}
				</div>
				<div>
					<strong>IDR</strong> {price}
				</div>
				<div className='capitalize flex gap-1 items-center'>
					<strong>Status:</strong>
					<p className='text-green-500 font-medium'>
						{status}
					</p>
				</div>
				<div>
					<strong>Restoran:</strong> {restaurant_id}
				</div>
			</div>
		</div>
	);
};

export default CardDetailMenu;
