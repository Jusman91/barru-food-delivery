import { listCategoryObj } from '@/static';
import { cn } from '@/lib/utils';
import { Carousel } from 'antd';
import { IMenuCategoryProps } from '@/types';

const MenuCategory = ({
	selectedCategory,
	setSelectedCategory,
}: IMenuCategoryProps) => {
	const handleSelectedCategory = (key: string) => {
		setSelectedCategory(key);
	};

	return (
		<Carousel
			className='carousel-category'
			speed={800}
			dots={false}
			arrows
			infinite={true}
			slidesToShow={5}
			slidesToScroll={1}
			initialSlide={0}
			responsive={[
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						arrows: false,
						draggable: true,
					},
				},
			]}>
			{listCategoryObj.map((item) => (
				<div
					key={item.key}
					className={cn(
						'!w-10 mx-6 lg:mx-24 cursor-pointer hover:scale-110 duration-300',
						selectedCategory === item.key
							? 'text-primary-40'
							: '',
					)}
					onClick={() => handleSelectedCategory(item.key)}>
					<div
						className={cn(
							'shadow-glass-sm bg-primary-0 rounded-full p-1',
							selectedCategory === item.key
								? 'animate-bounce'
								: '',
						)}>
						{item.icon}
					</div>
					<p className='flex justify-center items-center text-nowrap text-center font-bold'>
						{item.label}
					</p>
				</div>
			))}
		</Carousel>
	);
};

export default MenuCategory;
