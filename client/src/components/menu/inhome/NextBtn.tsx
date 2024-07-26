import { ButtonIcon } from '@/components/fragments';
import { IoArrowRedoSharp } from 'react-icons/io5';
export interface INextBtnProps {
	onClick: () => void;
}
const NextBtn = ({ onClick }: INextBtnProps) => {
	return (
		<ButtonIcon
			shape='circle'
			className='w-16 h-16 border-none'
			onClick={onClick}
			icon={<IoArrowRedoSharp className='text-5xl' />}
		/>
	);
};

export default NextBtn;
