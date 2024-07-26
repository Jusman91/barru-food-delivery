import { ButtonIcon } from '@/components/fragments';
import { ICloseNavlistBtnProps } from '@/types';
import { IoCloseCircleOutline } from 'react-icons/io5';

const CloseNavlistBtn = ({
	onClick,
}: ICloseNavlistBtnProps) => {
	return (
		<ButtonIcon
			shape='circle'
			className='md:hidden absolute z-50 top-1 right-4 p-0 border-none'
			icon={
				<IoCloseCircleOutline className='text-2xl text-primary-40 hover:text-primary-20' />
			}
			onClick={onClick}
		/>
	);
};

export default CloseNavlistBtn;
