import { cn } from '@/lib/utils';
import { ILabel } from '@/types';

const Label = ({ className, label }: ILabel) => {
	return (
		<label
			className={cn(
				'text-sm leading-5 capitalize',
				className,
			)}>
			{label}
		</label>
	);
};

export default Label;
