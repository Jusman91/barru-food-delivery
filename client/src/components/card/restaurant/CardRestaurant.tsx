import {
	CHEF_HAT,
	CUMI_BAKAR_TERIYAKI,
	IKAN_BAKAR_KECAP,
	KEPITING_BUMBU_KUNING,
	LOBSTER_PANGGANG,
	UDANG_GORENG,
} from '@/assets';
import { Image } from '@/components/elements';
import { useEffect } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoLocation, IoMail } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
export interface ICardRestaurantProps {
	name: string;
	thumbnail: string;
	address: string;
	phone: string;
	owner_id: string;
}
const CardRestaurant = ({
	name,
	thumbnail,
	address,
	phone,
	owner_id,
}: ICardRestaurantProps) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/restaurants/${owner_id}`);
	};
	useEffect(() => {
		const texts = document.querySelectorAll(
			'.restaurant-name',
		);
		texts.forEach((text) => {
			if (text instanceof HTMLElement) {
				let shadow = '';
				for (let i = 0; i < 15; i++) {
					shadow +=
						(shadow ? ',' : '') +
						-i * 1 +
						'px ' +
						i * 1 +
						'px 0 #101010';
					// 'px 0 rgba(33,33,33,1)';
				}
				text.style.textShadow = shadow;
			}
		});
	}, []);

	return (
		<div
			onClick={handleClick}
			className='group w-full h-[250px] [perspective:1000px] cursor-pointer'>
			<div className='card-restaurant [trasform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-500 '>
				<div className='absolute inset-0 w-[calc(100%-4px)] h-[calc(100%-4px)] top-[2px] left-[2px] overflow-hidden rounded-2xl'>
					<div className='absolute inset-0 rounded-2xl'>
						<Image src={thumbnail} alt='Thumbnail' />
						<div className='absolute inset-0 bg-gradient-to-tr from-[#0f1823]/95 via-[#0f1823]/80 to-[#fff]/10 h-full w-full ' />
					</div>
					<div className='absolute z-10 top-10 right-5 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-light' />
					<div className='grid place-items-center w-full h-full group-hover:[transform:rotateY(180deg)]'>
						<h1 className='restaurant-name relative text-white text-3xl font-semibold text-center leading-tight w-3/4 tracking-wider -rotate-[28deg] skew-x-[25deg]'>
							{name}
						</h1>
					</div>
				</div>

				<div
					className='absolute inset-0 w-full h-full bg-[#0f1823]/85 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] group-hover:[backface-visibility:visible]
			'>
					<div className='flex min-h-full flex-col justify-center gap-4 text-primary-0 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]'>
						<div className='flex flex-col justify-center items-center'>
							<Image src={CHEF_HAT} className='h-8 w-8' />
							<h6 className='text-clamp-h6'>{name}</h6>
						</div>
						<div className='flex items-center gap-2'>
							<IoMail className='text-primary-30' />
							<small>abcd@gmail.com</small>
						</div>
						<div className='flex items-center gap-2'>
							<IoLocation className='text-primary-30' />
							<small>{address}</small>
						</div>
						<div className='flex items-center gap-2'>
							<BiSolidPhoneCall className='text-primary-30' />
							<small>{phone}</small>
						</div>
						<div className='flex gap-4 items-center justify-center'>
							<Image
								src={UDANG_GORENG}
								className='w-6 h-6 border-2 border-primary-0 shadow-md shadow-primary-0 rounded-full'
							/>
							<Image
								src={CUMI_BAKAR_TERIYAKI}
								className='w-6 h-6 border-2 border-primary-0 shadow-md shadow-primary-0 rounded-full'
							/>
							<Image
								src={IKAN_BAKAR_KECAP}
								className='w-6 h-6 border-2 border-primary-0 shadow-md shadow-primary-0 rounded-full'
							/>
							<Image
								src={LOBSTER_PANGGANG}
								className='w-6 h-6 border-2 border-primary-0 shadow-md shadow-primary-0 rounded-full'
							/>
							<Image
								src={KEPITING_BUMBU_KUNING}
								className='w-6 h-6 border-2 border-primary-0 shadow-md shadow-primary-0 rounded-full'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardRestaurant;
