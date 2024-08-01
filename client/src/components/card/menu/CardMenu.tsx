import { Button, Image } from '@/components/elements';
import { formatPrice } from '@/lib/utils';
import { useStore } from '@/store/store';
import { ICardCarouselMenuProps } from '@/types';
import { Rate } from 'antd';

const CardMenu = ({
	name,
	price,
	thumbnail,
	status,
	description,
}: ICardCarouselMenuProps) => {
	const openModal = useStore((state) => state.openModal);
	const checkStatus = status === 1 ? 'Ready' : 'Not Ready';
	return (
		<div
			onClick={() => openModal('menu')}
			className='group relative w-full h-72 md:h-80 py-4 md:py-0 flex flex-col items-center gap-2 bg-gradient-to-b from-inherit to bg-primary-0/70 shadow-glass-sm rounded-xl cursor-pointer'>
			<div className='relative w-28 h-28 md:w-40 md:h-40 p-2 bg-gradient-to-t from-white to bg-primary-10/70 rounded-full group-hover:scale-125 group-hover:bg-gradient-to-b group-hover:from-white group-hover:bg-fuchsia-300 duration-300'>
				<Image
					src={thumbnail}
					alt=''
					className='rounded-full border-4 border-white'
				/>
				<div className='absolute right-0 bottom-2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white p-1'>
					<small className='text-sm md:text-lg w-full h-full bg-yellow-400 rounded-full font-bold text-white flex justify-center items-center'>
						{formatPrice(price)}
					</small>
				</div>
			</div>
			<small className='font-semibold'>{checkStatus}</small>
			<Rate
				className='text-[10px] md:text-xs'
				disabled
				value={4}
			/>

			<div className='text-center'>
				<h6 className='text-sm md:text-base font-medium'>
					{name}
				</h6>
				<small>{description}</small>
			</div>
			<Button
				type='primary'
				className='absolute -bottom-4 rounded-3xl text-xs md:text-sm'>
				Pesan
			</Button>
		</div>
	);
};

export default CardMenu;
