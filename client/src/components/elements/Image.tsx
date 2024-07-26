import { cn } from '@/lib/utils';
import { IImageProps } from '@/types';

const Image = ({
	src,
	className,
	...props
}: IImageProps) => {
	return (
		<img
			{...props}
			loading='lazy'
			src={src}
			className={cn(
				'w-full h-full object-cover',
				className,
			)}
		/>
	);
};

export default Image;
