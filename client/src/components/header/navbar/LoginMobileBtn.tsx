import { LoginBtn } from '@/components/elements';
import { ILoginBtn } from '@/types';

const LoginMobileBtn = ({ onClick }: ILoginBtn) => {
	return (
		<LoginBtn
			className='block md:hidden w-full h-10'
			onClick={onClick}
		/>
	);
};

export default LoginMobileBtn;
