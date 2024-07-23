import { Image } from '../elements';
import { imgHeroHomeObj } from '@/static';

const RightSideHeroHome = () => {
	return (
		<div className='relative flex-1 h-full'>
			{imgHeroHomeObj.map((item, idx) => (
				<Image
					key={idx}
					src={item.src}
					alt={item.alt}
					className={item.className}
				/>
			))}
		</div>
	);
};

export default RightSideHeroHome;
