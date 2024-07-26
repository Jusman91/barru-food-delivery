import { ButtonIcon } from '@/components/fragments';
import { IInfoBtnProps } from '@/types';
import { IoInformationCircleSharp } from 'react-icons/io5';

const InfoBtn = ({ onClick }: IInfoBtnProps) => {
	return (
		<ButtonIcon
			type='primary'
			shape='circle'
			className=' w-8 h-8 absolute top-3 right-3'
			icon={
				<IoInformationCircleSharp className='text-3xl' />
			}
			onClick={onClick}
		/>
	);
};

export default InfoBtn;
