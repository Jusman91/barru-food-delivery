import { ICardService } from '@/types';
import { Image, Typography } from '../elements';

const CardService = ({
	src,
	alt,
	title,
	subTitle,
}: ICardService) => {
	return (
		<div className='w-full flex flex-col justify-center items-center '>
			<Image
				src={src}
				alt={alt}
				className='w-56 h-52 object-cover'
			/>
			<div className='text-center'>
				<Typography
					type='heading'
					text={title}
					className='text-h4'
				/>
				<Typography
					type='paragraph'
					text={subTitle}
					className='text-lg text-wrap'
				/>
			</div>
		</div>
	);
};

export default CardService;
