import { LOGO } from '@/assets';
import Image from './Image';

const Logo = () => {
	return (
		<Image src={LOGO} alt='Logo' className='w-8 h-8' />
	);
};

export default Logo;
