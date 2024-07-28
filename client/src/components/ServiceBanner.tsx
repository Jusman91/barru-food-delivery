import { cardServiceObj } from '@/static';
import { CardService } from './card';
import { HeaderContent } from './fragments';

const ServiceBanner = () => {
	return (
		<section className='w-full h-full px-6 lg:px-[70px] pb-16 md:pb-32 flex flex-col items-center gap-16'>
			<HeaderContent
				title='apa yang kami layani'
				subTitle='Mitra Pengiriman Makanan Favorit Anda'
				rootClassName='max-w-[532px]'
			/>
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
