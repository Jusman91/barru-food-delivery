import { cn } from '@/lib/utils';

export interface IImgSvgProps {
	svg: string;
	alt?: string;
	className?: string;
}
const ImgSvg = ({ svg, alt, className }: IImgSvgProps) => {
	return (
		<img
			src={svg}
			alt={alt}
			className={cn('w-4 h-4 ', className)}
		/>
	);
};

export default ImgSvg;
