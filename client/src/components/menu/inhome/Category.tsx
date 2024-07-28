import { getListCategoryItems } from '@/lib/utils/getListCategoryItems';
import { Menu, MenuProps } from 'antd';

const Category = () => {
	const { items } = getListCategoryItems();
	const onClick: MenuProps['onClick'] = (e) => {
		console.log(e.key);
	};
	return (
		<Menu
			className='w-full !bg-inherit text-md font-merienda font-semibold flex flex-col gap-12'
			mode='vertical'
			items={items}
			selectedKeys={['ikan']}
			onClick={onClick}
		/>
	);
};

export default Category;
