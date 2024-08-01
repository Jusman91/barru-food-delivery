import { CHEF } from '@/assets';
import { Image } from './elements';
import { HeaderContent } from './fragments';
import { CardRating } from './card';

const CustomerSay = () => {
	return (
		<section className='relative w-full h-full px-6 lg:pl-0 lg:pr-12 py-16 lg:pt-0 flex flex-col lg:flex-row items-center'>
			<Image src={CHEF} alt='Chef' className='h-[760px]' />
			<div className='absolute top-0 lg:static'>
				<HeaderContent
					title='apa yang mereka katakan'
					subTitle='Apa Kata Pelanggan'
					rootClassName='lg:text-start pb-56 lg:pb-6'
				/>
				<CardRating />
			</div>
		</section>
	);
};

export default CustomerSay;
