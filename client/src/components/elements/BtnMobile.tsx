import { cn } from '@/lib/utils';
import Button from './Button';
import { IBtnMobile } from '@/types';

const BtnMobile = ({
	icon,
	className,
	onClick,
}: IBtnMobile) => {
	return (
		<Button
			type='link'
			icon={icon}
			onClick={onClick}
			className={cn(
				'flex justify-center items-center w-8 h-8 md:hidden hover:text-primary-20',
				className,
			)}
		/>
	);
};

export default BtnMobile;
