import { Input } from 'antd';
import { IoMail } from 'react-icons/io5';
import { Button } from '../elements';

const Subscribe = () => {
	return (
		<div className='flex flex-col gap-8'>
			<small>
				Receive exclusive offers in your mailbox
			</small>
			<div className='flex items-center gap-2'>
				<Input
					placeholder='Enter your Email'
					prefix={<IoMail className='text-primary-40' />}
				/>
				<Button type='primary'>Subscribe</Button>
			</div>
		</div>
	);
};

export default Subscribe;
