import { Button } from '@/components/elements';
import { ICloseNavlistBtnProps } from '@/types';
import { IoCloseCircleOutline } from 'react-icons/io5';

const CloseNavlistBtn = ({
	onClick,
}: ICloseNavlistBtnProps) => {
	return (
		<Button
			type='link'
			shape='circle'
			className='md:hidden absolute z-50 top-1 right-4'
			icon={<IoCloseCircleOutline className='text-3xl' />}
			onClick={onClick}
		/>
	);
};

export default CloseNavlistBtn;
