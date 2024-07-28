import { IListItemsFooterProps } from '@/types';
import { Link } from 'react-router-dom';

const ListItemsFooter = ({
	data,
	title,
}: IListItemsFooterProps) => {
	return (
		<div className='text-sm lg:text-xl'>
			<h6 className='font-semibold leading-7 pb-4 '>
				{title}
			</h6>
			<div className='flex flex-col items-start gap-4'>
				{data.map((item, idx) => (
					<Link
						to={item.path}
						key={idx}
						className='text-color-base text-xs'>
						{item.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default ListItemsFooter;
