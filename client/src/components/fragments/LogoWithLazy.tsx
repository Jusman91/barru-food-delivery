import { lazy, Suspense } from 'react';
import Skeleton from './Skeleton';
const Logo = lazy(() => import('../elements/Logo'));

const LogoWithLazy = () => {
	return (
		<Suspense
			fallback={
				<Skeleton
					width={56}
					height={56}
					borderRadius='100%'
				/>
			}>
			<Logo />
		</Suspense>
	);
};

export default LogoWithLazy;
