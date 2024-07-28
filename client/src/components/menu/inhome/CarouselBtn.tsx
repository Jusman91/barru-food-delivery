import { Button } from '@/components/elements';
import { ICarouselBtnProps } from '@/types';

const CarouselBtn = ({
	icon,
	onClick,
}: ICarouselBtnProps) => {
	return (
		<Button
			type='link'
			shape='circle'
			className='w-16 h-16'
			icon={icon}
			onClick={onClick}
		/>
	);
};

export default CarouselBtn;
