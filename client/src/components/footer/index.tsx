import { Typography } from '../elements';

const Footer = () => {
	return (
		<footer className='w-full h-[70px] flex justify-center items-center text-center border-t border-primary-10 p-6 bg-transparent'>
			<Typography
				text='Copyright ©2024 Tasi Delivery Food, All rights Reserved'
				className='font-semibold leading-snug text-sm md:text-base'
			/>
		</footer>
	);
};

export default Footer;
