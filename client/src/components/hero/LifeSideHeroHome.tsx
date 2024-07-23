import { Typography } from '../elements';

const LifeSideHeroHome = () => {
	return (
		<div className='h-full flex-1 flex flex-col justify-center gap-y-4'>
			<div className='font-merienda font-bold text-clamp-7xl leading-[1.23]'>
				<Typography
					text='Makan sehat'
					className='capitalize text-primary-30 bg-gradient-to-r from-primary-40 via-purple-500 to-pink-300 text-transparent bg-clip-text'
				/>
				<Typography
					text='penting bagian dari gaya hidup'
					className='capitalize text-wrap'
				/>
			</div>
			<Typography
				text='Tugas kami adalah mengisi perut Anda dengan makanan lezat dan pengiriman cepat'
				className='w-3/4 text-h6 font-medium text-wrap'
			/>
		</div>
	);
};

export default LifeSideHeroHome;
