import { HERO_MENU } from '@/assets';
import { MenuList, SearchMenu } from '@/components';
import { mockDataMenus } from '@/static/mockData';
import SingleMenu from './SingleMenu';
import MenuCategory from '@/components/menu/MenuCategory';
import { useState } from 'react';
import Hero from '@/components/hero/Hero';

const Menus = () => {
	const [selectedCategory, setSelectedCategory] =
		useState<string>('cumi');
	const data = mockDataMenus.filter(
		(item) => item.category === selectedCategory,
	);
	return (
		<section className='min-h-screen pb-8 md:pb-16'>
			<Hero
				name='menus'
				img={HERO_MENU}
				textTop='Cepat & Segar'
				textBottom='Dapatkan'
			/>
			<div className='py-8 px-6 md:px-12'>
				<SearchMenu />
				<MenuCategory
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				{data.length > 0 ? (
					<MenuList data={data} />
				) : (
					<h1 className='text-clamp-h1 font-medium leading-tight flex justify-center pt-8'>
						No Menu
					</h1>
				)}
				<SingleMenu />
			</div>
		</section>
	);
};

export default Menus;
