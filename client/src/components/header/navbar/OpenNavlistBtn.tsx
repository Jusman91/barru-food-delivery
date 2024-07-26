import { ButtonIcon } from '@/components/fragments';
import { IOpenNavlistBtnProps } from '@/types';
import { RiMenuFold2Fill } from 'react-icons/ri';

const OpenNavlistBtn = ({
	onClick,
}: IOpenNavlistBtnProps) => {
	return (
		<ButtonIcon
			shape='circle'
			className='md:hidden p-0 border-none'
			icon={
				<RiMenuFold2Fill className='text-2xl text-primary-40 hover:text-primary-20' />
			}
			onClick={onClick}
		/>
	);
};

export default OpenNavlistBtn;
