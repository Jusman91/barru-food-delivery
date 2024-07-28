import { Link } from 'react-router-dom';
import {
	BiLogoFacebookCircle,
	BiLogoInstagramAlt,
	BiLogoTwitter,
} from 'react-icons/bi';

const FollowUs = () => {
	return (
		<>
			<h6 className='text-sm lg:text-xl font-semibold leading-7'>
				Follow us
			</h6>
			<div className='flex items-center gap-4'>
				<Link to={'/'}>
					<BiLogoInstagramAlt className='w-7 h-7' />
				</Link>
				<Link to={'/'}>
					<BiLogoFacebookCircle className='w-7 h-7' />
				</Link>
				<Link to={'/'}>
					<BiLogoTwitter className='w-7 h-7' />
				</Link>
			</div>
		</>
	);
};

export default FollowUs;
