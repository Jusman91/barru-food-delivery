import { LOGO } from '@/assets';
import { Image } from '../elements';

const Logo = () => {
	return (
		<div className='flex items-center gap-2'>
			<Image src={LOGO} alt='Logo' className='w-10 h-10' />
			<h4 className='text-clamp-h5 font-semibold'>tasi</h4>
		</div>
	);
};

export default Logo;
