import { Button, Icon } from '@/components/elements';
import { IOrderBtnProps } from '@/types';
import { BiSolidShoppingBags } from 'react-icons/bi';

const OrderBtn = ({ onClick }: IOrderBtnProps) => {
	return (
		<Button
			type='primary'
			className='rounded-lg'
			onClick={onClick}>
			Pesan
			<Icon>
				<BiSolidShoppingBags />
			</Icon>
		</Button>
	);
};

export default OrderBtn;
