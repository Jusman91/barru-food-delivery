import { ButtonIcon } from '@/components/fragments';
import { IoArrowUndoSharp } from 'react-icons/io5';
export interface IPrevBtnProps {
	onClick: () => void;
}
const PrevBtn = ({ onClick }: IPrevBtnProps) => {
	return (
		<ButtonIcon
			shape='circle'
			className='w-16 h-16 border-none'
			onClick={onClick}
			icon={<IoArrowUndoSharp className='text-5xl' />}
		/>
	);
};

export default PrevBtn;
