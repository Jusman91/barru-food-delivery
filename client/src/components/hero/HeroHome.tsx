import { HEROHOME1 } from '@/assets';
import { Image } from '../elements';

const HeroHome = () => {
	return (
		<section className='relative w-full pl-6 lg:pl-[70px] pb-16 md:pb-32'>
			<div className='grid grid-cols-1 lg:grid-cols-2'>
				<div className='order-2 lg:order-none w-full flex flex-col justify-center gap-y-4 md:gap-y-12 text-color-base'>
					<div className='font-merienda font-bold text-clamp-7xl leading-normal'>
						<p className='capitalize text-primary-30 bg-gradient-to-r from-primary-40 via-purple-500 to-pink-300 text-transparent bg-clip-text'>
							Makan sehat
						</p>
						<p className='capitalize text-wrap'>
							penting bagian dari gaya hidup
						</p>
					</div>
					<p className='w-full lg:w-3/4 text-clamp-h6 leading-7 font-medium text-wrap'>
						Tugas kami adalah mengisi perut Anda dengan
						makanan lezat dan pengiriman cepat
					</p>
				</div>
				<Image
					src={HEROHOME1}
					alt='Hero'
					className='order-1 lg:order-none relative -top-12'
				/>
			</div>
		</section>
	);
};

export default HeroHome;
