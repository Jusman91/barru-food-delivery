import { IImageProps } from '@/types';

const Image = ({ src, alt, className }: IImageProps) => {
	return (
		<img
			loading='lazy'
			src={src}
			alt={alt}
			className={className}
		/>
	);
};

export default Image;
