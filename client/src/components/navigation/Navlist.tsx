import { getListNavItems } from '@/lib/utils/getListNavItems';
import {
	getSelectedKeysInStorage,
	saveSelectedKeysInStorage,
} from '@/lib/utils/storage';
import { Grid, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
const { useBreakpoint } = Grid;
const Navlist = () => {
	const navigate = useNavigate();
	const { items } = getListNavItems();
	const { md } = useBreakpoint();
	const selectedKeys = getSelectedKeysInStorage();
	const handleNavigate: MenuProps['onClick'] = (e) => {
		e.domEvent.preventDefault();
		navigate(e.key);
		saveSelectedKeysInStorage(e.key);
	};
	return (
		<Menu
			className='bg-inherit w-full font-merienda font-bold py-8 md:py-0'
			mode={md ? 'horizontal' : 'vertical'}
			items={items}
			selectedKeys={selectedKeys}
			onClick={handleNavigate}
		/>
	);
};

export default Navlist;
