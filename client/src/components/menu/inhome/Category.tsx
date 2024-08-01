import { getListCategoryItems } from '@/lib/utils/getListCategoryItems';
import { ICategoryInHomeProps } from '@/types';
import { Menu } from 'antd';

const Category = ({
	onClick,
	selectedKeys,
}: ICategoryInHomeProps) => {
	const { items } = getListCategoryItems();

	return (
		<Menu
			className='w-full !bg-inherit text-md font-semibold flex flex-col gap-12'
			mode='vertical'
			items={items}
			selectedKeys={selectedKeys}
			onClick={onClick}
		/>
	);
};

export default Category;
