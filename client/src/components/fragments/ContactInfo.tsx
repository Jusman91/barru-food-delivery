import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoMail } from 'react-icons/io5';
import Medsos from './Medsos';

const ContactInfo = () => {
	return (
		<div className='static lg:absolute -left-32 top-10 w-full lg:w-2/5 h-[80%] flex flex-col gap-6 lg:gap-10 justify-center text-white bg-cyan-950 p-6 lg:p-8 rounded-none lg:rounded-2xl shadow-md shadow-primary-20'>
			<h5 className='text-clamp-h5 font-semibold leading-tight text-center'>
				Contact Info
			</h5>
			<div className='flex items-center gap-4'>
				<IoMail className='text-2xl' />
				<p>tasi@gmail.com</p>
			</div>
			<div className='flex items-center gap-4'>
				<BiSolidPhoneCall className='text-2xl' />
				<p>+62 123456789000</p>
			</div>
			<Medsos
				pathFacebook='/contact'
				pathInstagram='/contact'
				pathTiktok='/contact'
				pathTwitter='/contact'
				pathYoutube='/contact'
			/>
		</div>
	);
};

export default ContactInfo;
