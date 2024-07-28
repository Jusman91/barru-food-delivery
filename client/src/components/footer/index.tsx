import { listItemsFooter } from '@/static';
import ListItemsFooter from './ListItemsFooter';
import { Logo } from '../fragments';
import FollowUs from './FollowUs';
import Subscribe from './Subscribe';

const Footer = () => {
	return (
		<footer className='bg-primary-0'>
			<div className='p-6 md:px-[70px] w-full h-fit flex flex-wrap gap-4 lg:justify-evenly'>
				<div className='flex-1 flex flex-col lg:justify-center gap-4'>
					<Logo />
					<p className='text-xs md:text-base max-w-[300px]'>
						Our job is to filling your tummy with delicious
						food and with fast and free delivery.
					</p>
				</div>
				<div className='shrink-0 lg:w-1/2 flex lg:justify-evenly gap-2'>
					<ListItemsFooter
						title='About'
						data={listItemsFooter.about}
					/>
					<ListItemsFooter
						title='Company'
						data={listItemsFooter.company}
					/>
					<ListItemsFooter
						title='Support'
						data={listItemsFooter.support}
					/>
				</div>
				<div className='flex-1 flex flex-col gap-8'>
					<FollowUs />
					<Subscribe />
				</div>
			</div>
			<p className='border-t-2 border-white border-dashed text-center font-semibold leading-snug text-sm md:text-base py-4'>
				Copyright ©2024 Tasi Food Delivery, All rights
				Reserved
			</p>
		</footer>
	);
};

export default Footer;
