import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, MenuProps } from 'antd';
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
import { mockDataMenus } from '@/static/mockData';

const { Header, Sider, Content } = Layout;

const MenuInHome = () => {
	const { md } = useBreakpoints();
	const slider = useRef<CarouselRef | null>(null);
	const [selectedKeys, setSelectedKeys] = useState<
		string[]
	>(['ikan']);
	const handleCategory: MenuProps['onClick'] = (e) => {
		e.domEvent.preventDefault();
		setSelectedKeys([e.key]);
	};

	const data = mockDataMenus.filter(
		(item) => item.category === selectedKeys[0],
	);

	return (
		<section className='w-full h-full px-6 lg:px-12 pb-16 md:pb-32'>
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
						<Category
							selectedKeys={selectedKeys}
							onClick={handleCategory}
						/>
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
				<Content className='text-center'>
					{data.length > 0 ? (
						<Carousel ref={slider} data={data} />
					) : (
						<h1 className='text-clamp-h1 font-medium leading-tight'>
							No Menus
						</h1>
					)}
				</Content>
			</Layout>
		</section>
	);
};

export default MenuInHome;
