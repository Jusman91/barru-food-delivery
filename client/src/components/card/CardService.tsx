import { ICardServiceProps } from '@/types';
import { Image } from '../elements';

const CardService = ({
	src,
	alt,
	title,
	subTitle,
}: ICardServiceProps) => {
	return (
		<div className='w-full flex flex-col justify-center items-center '>
			<Image src={src} alt={alt} className='w-56 h-56' />
			<div className='text-center text-color-base'>
				<h2 className='text-clamp-h4 font-semibold leading-tight'>
					{title}
				</h2>
				<p className='text-lg text-wrap'>{subTitle}</p>
			</div>
		</div>
	);
};

export default CardService;
