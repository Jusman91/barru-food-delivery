import { cardServiceObj } from '@/static/cardServiceObj';
import { CardService } from './card';
import { Typography } from './elements';

const ServiceBanner = () => {
	return (
		<section className='w-full min-h-[calc(100vh-100px)] flex flex-col items-center gap-16'>
			<div className='text-center'>
				<Typography
					type='heading'
					text='apa yang kami layani'
					className='uppercase text-h6 text-primary-40'
				/>
				<Typography
					type='heading'
					text='Mitra Pengiriman Makanan Favorit Anda'
					className='text-h2 max-w-[532px] text-wrap'
				/>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				{cardServiceObj.map((item, idx) => (
					<CardService
						key={idx}
						src={item.src}
						alt={item.alt}
						title={item.title}
						subTitle={item.subTitle}
					/>
				))}
			</div>
		</section>
	);
};

export default ServiceBanner;
