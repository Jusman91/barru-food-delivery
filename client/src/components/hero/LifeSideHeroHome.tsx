const LifeSideHeroHome = () => {
	return (
		<div className='h-full flex-1 flex flex-col justify-center gap-y-4 md:gap-y-12 text-color-base'>
			<div className='font-merienda font-bold text-clamp-7xl leading-normal'>
				<p className='capitalize text-primary-30 bg-gradient-to-r from-primary-40 via-purple-500 to-pink-300 text-transparent bg-clip-text'>
					Makan sehat
				</p>
				<p className='capitalize text-wrap'>
					penting bagian dari gaya hidup
				</p>
			</div>
			<p className='w-full md:w-3/4 text-clamp-h6 leading-7 font-medium text-wrap'>
				Tugas kami adalah mengisi perut Anda dengan makanan
				lezat dan pengiriman cepat
			</p>
		</div>
	);
};

export default LifeSideHeroHome;
