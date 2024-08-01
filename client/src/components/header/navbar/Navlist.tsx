import { useBreakpoints } from '@/hooks';
import { getListNavItems } from '@/lib/utils/getListNavItems';
import {
	getSelectedKeysInStorage,
	saveSelectedKeysInStorage,
} from '@/lib/utils/storage';
import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const Navlist = () => {
	const navigate = useNavigate();
	const { md } = useBreakpoints();
	const { items } = getListNavItems();
	const selectedKeys = getSelectedKeysInStorage();
	const handleNavigate: MenuProps['onClick'] = (e) => {
		e.domEvent.preventDefault();
		navigate(e.key);
		saveSelectedKeysInStorage(e.key);
	};

	return (
		<Menu
			className='!bg-inherit font-bold py-8 md:py-0'
			mode={md !== false ? 'horizontal' : 'vertical'}
			items={items}
			selectedKeys={selectedKeys}
			onClick={handleNavigate}
		/>
	);
};

export default Navlist;
