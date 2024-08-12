import { Form } from 'antd';
import Fields from './Fields';
import { Button } from '@/components/elements';

const ContactForm = () => {
	return (
		<Form
			className='w-full lg:w-[60%] ml-0 lg:ml-[32%] pt-6 lg:pt-0 px-2 lg:px-0'
			layout='vertical'
			autoComplete='off'>
			<Fields />
			<div className='flex justify-end px-4'>
				<Button
					type='primary'
					className='text-sm rounded-xl bg-cyan-950'>
					Kirim
				</Button>
			</div>
		</Form>
	);
};

export default ContactForm;
