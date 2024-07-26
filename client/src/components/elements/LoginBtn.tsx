import { cn } from '@/lib/utils';
import Button from './Button';
import { ILoginBtn } from '@/types';

const LoginBtn = ({ onClick, className }: ILoginBtn) => {
	return (
		<Button
			onClick={onClick}
			type='primary'
			className={cn('font-bold text-base', className)}>
			Login
		</Button>
	);
};

export default LoginBtn;
