import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { useBreakpoints } from '@/hooks';
import {
	IoArrowRedoSharp,
	IoArrowUndoSharp,
} from 'react-icons/io5';
import Category from './Category';
import Carousel from './Carousel';
import CategoryMobile from './CategoryMobile';
import CarouselBtn from './CarouselBtn';
import { HeaderContent } from '@/components/fragments';

const { Header, Sider, Content } = Layout;

const MenuInHome = () => {
	const { md } = useBreakpoints();
	const slider = useRef<CarouselRef | null>(null);
	return (
		<section className='w-full h-full lg:px-[70px] pb-16 md:pb-32'>
			<div className='flex justify-between'>
				<HeaderContent
					title={'menu kami'}
					subTitle={
						'Menu Yang Selalu Membuat Anda Jatuh Cinta'
					}
					rootClassName='text-start max-w-[532px]'
				/>
				<div className='hidden md:flex items-end gap-12'>
					<CarouselBtn
						icon={<IoArrowUndoSharp className='text-6xl' />}
						onClick={() => slider.current?.prev()}
					/>
					<CarouselBtn
						icon={<IoArrowRedoSharp className='text-6xl' />}
						onClick={() => slider.current?.next()}
					/>
				</div>
			</div>
			<Layout className=' p-0 md:p-4 bg-inherit gap-x-2'>
				{md ? (
					<Sider
						className='custom-scrollbar !bg-inherit h-[500px] overflow-y-scroll'
						width={230}>
						<Category />
					</Sider>
				) : (
					<Header className='p-0 bg-inherit flex items-center justify-between'>
						<div className='w-1/2 flex items-center gap-2'>
							<h6 className='text-sm font-medium'>
								Kategory:
							</h6>
							<CategoryMobile />
						</div>
						<Link
							to={'/menus'}
							className='text-sm font-medium'>
							Semu Menu
						</Link>
					</Header>
				)}
				<Content>
					<Carousel ref={slider} />
				</Content>
			</Layout>
		</section>
	);
};

export default MenuInHome;
