import { Skeleton } from 'antd';
import { lazy, Suspense } from 'react';
const Logo = lazy(() => import('../elements/Logo'));

const LogoWithLazy = () => {
	return (
		<Suspense
			fallback={
				<Skeleton.Node
					active
					style={{
						width: 56,
						height: 56,
						borderRadius: '100%',
					}}>
					{' '}
				</Skeleton.Node>
			}>
			<Logo />
		</Suspense>
	);
};

export default LogoWithLazy;
