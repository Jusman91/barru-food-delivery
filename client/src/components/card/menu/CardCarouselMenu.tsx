import { ICardCarouselMenuProps } from '@/types';
import { OrderBtn } from '@/components/fragments';
import { Image } from '@/components/elements';
import { useStore } from '@/store/store';

const CardCarouselMenu = ({
	name,
	price,
	status,
	thumbnail,
}: ICardCarouselMenuProps) => {
	const openModal = useStore((state) => state.openModal);
	const checkStatus =
		status === 1 ? 'tersedia' : 'tidak tersedia';

	return (
		<div className='card-menu relative h-72 md:h-[400px] mx-2 p-1 rounded-3xl shadow-glass-sm opacity-100 md:opacity-70'>
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
				<OrderBtn onClick={() => openModal('menu')} />
			</div>
		</div>
	);
};

export default CardCarouselMenu;
