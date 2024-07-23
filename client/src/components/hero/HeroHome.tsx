import LifeSideHeroHome from './LifeSideHeroHome';
import RightSideHeroHome from './RightSideHeroHome';

const HeroHome = () => {
	return (
		<section className='w-full min-h-screen py-6'>
			<div className='h-[550px] md:h-[500px] flex flex-col-reverse md:flex-row items-center justify-between'>
				<LifeSideHeroHome />
				<RightSideHeroHome />
			</div>
		</section>
	);
};

export default HeroHome;
