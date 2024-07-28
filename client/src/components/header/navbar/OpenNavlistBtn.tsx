import { Button } from '@/components/elements';
import { IOpenNavlistBtnProps } from '@/types';
import { RiMenuFold2Fill } from 'react-icons/ri';

const OpenNavlistBtn = ({
	onClick,
}: IOpenNavlistBtnProps) => {
	return (
		<Button
			shape='circle'
			type='link'
			className='md:hidden p-0'
			icon={<RiMenuFold2Fill className='text-3xl' />}
			onClick={onClick}
		/>
	);
};

export default OpenNavlistBtn;
