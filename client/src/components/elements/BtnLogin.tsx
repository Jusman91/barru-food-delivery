import { cn } from '@/lib/utils';
import Button from './Button';
import { IBtnLogin } from '@/types';

const BtnLogin = ({ onClick, className }: IBtnLogin) => {
	return (
		<Button
			onClick={onClick}
			type='primary'
			className={cn('font-bold text-base', className)}>
			Login
		</Button>
	);
};

export default BtnLogin;
