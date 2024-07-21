import { IconProps } from '@/types';
import { cn } from '@/lib/utils';

const Icon = ({ children, className }: IconProps) => {
	return (
		<div
			className={cn(
				'flex justify-center items-center',
				className,
			)}>
			{children}
		</div>
	);
};

export default Icon;
