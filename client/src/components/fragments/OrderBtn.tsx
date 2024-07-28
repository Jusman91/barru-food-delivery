import { Button } from '@/components/elements';
import { IOrderBtnProps } from '@/types';
import { BiSolidShoppingBags } from 'react-icons/bi';

const OrderBtn = ({ onClick }: IOrderBtnProps) => {
	return (
		<Button
			type='primary'
			className='rounded-2xl'
			icon={<BiSolidShoppingBags />}
			iconPosition='end'
			onClick={onClick}>
			Pesan
		</Button>
	);
};

export default OrderBtn;
