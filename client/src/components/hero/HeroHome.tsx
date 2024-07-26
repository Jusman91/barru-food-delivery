import LifeSideHeroHome from './LifeSideHeroHome';
import RightSideHeroHome from './RightSideHeroHome';

const HeroHome = () => {
	return (
		<section className='w-full py-6 pb-16 md:pb-32'>
			<div className='h-[600px] md:h-[500px] flex flex-col-reverse md:flex-row items-center justify-between gap-y-3'>
				<LifeSideHeroHome />
				<RightSideHeroHome />
			</div>
		</section>
	);
};

export default HeroHome;
