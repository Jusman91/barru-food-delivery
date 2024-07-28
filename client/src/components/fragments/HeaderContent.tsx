import { IHeaderContent } from '@/types';
import { cn } from '@/lib/utils';

const HeaderContent = ({
	title,
	subTitle,
	rootClassName,
}: IHeaderContent) => {
	return (
		<div
			className={cn(
				'text-center font-semibold',
				rootClassName,
			)}>
			<h1 className='uppercase text-clamp-h6 leading-7 text-primary-40'>
				{title}
			</h1>
			<h1 className='text-clamp-h2 leading-tight text-wrap'>
				{subTitle}
			</h1>
		</div>
	);
};

export default HeaderContent;
