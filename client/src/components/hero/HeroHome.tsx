import { lazy, Suspense } from 'react';
import LifeSideHeroHome from './LifeSideHeroHome';
import { Skeleton } from '../fragments';
const RightSideHeroHome = lazy(
	() => import('./RightSideHeroHome'),
);

const HeroHome = () => {
	return (
		<section className='w-full md:h-[500px] flex flex-col-reverse md:flex-row items-center justify-between py-6'>
			<LifeSideHeroHome />
			<Suspense
				fallback={
					<Skeleton
						width={700}
						height={450}
						borderRadius='10%'
					/>
				}>
				<RightSideHeroHome />
			</Suspense>
		</section>
	);
};

export default HeroHome;
