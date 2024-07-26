import { useRef } from 'react';
import { Layout } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import Category from './Category';
import Carousel from './Carousel';
import PrevBtn from './PrevBtn';
import NextBtn from './NextBtn';
import HeaderContent from './Header';
import { useBreakpoints } from '@/hooks';
import CategoryMobile from './CategoryMobile';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MenuInHome = () => {
	const { md } = useBreakpoints();
	const slider = useRef<CarouselRef | null>(null);
	return (
		<section className='w-full h-full pb-16 md:pb-32'>
			<HeaderContent />
			<Layout className=' p-0 md:p-4 bg-bkg-base gap-x-2'>
				{md ? (
					<Sider
						className='custom-scrollbar h-[500px] overflow-y-scroll'
						width={230}>
						<Category />
					</Sider>
				) : (
					<Header className='p-0 bg-inherit flex items-center justify-between'>
						<div className='w-1/2 flex items-center gap-2'>
							<h6 className='text-clamp-h6 font-medium'>
								Kategory:
							</h6>
							<CategoryMobile />
						</div>
						<Link
							to={'/menus'}
							className='text-clamp-h6 font-medium'>
							Semu Menu
						</Link>
					</Header>
				)}

				<Content>
					<div className='hidden md:flex items-center gap-8'>
						<PrevBtn
							onClick={() => slider.current?.prev()}
						/>
						<NextBtn
							onClick={() => slider.current?.next()}
						/>
					</div>
					<Carousel ref={slider} />
				</Content>
			</Layout>
		</section>
	);
};

export default MenuInHome;
