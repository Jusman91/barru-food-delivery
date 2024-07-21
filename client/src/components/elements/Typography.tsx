import { cn } from '@/lib/utils';
import { ITypographyProps } from '@/types';

const Typography = ({
	type = 'heading',
	text,
	className,
}: ITypographyProps) => {
	return type === 'heading' ? (
		<h3 className={cn('text-color-base', className)}>
			{text}
		</h3>
	) : (
		<p className={cn('text-color-base', className)}>
			{text}
		</p>
	);
};

export default Typography;
