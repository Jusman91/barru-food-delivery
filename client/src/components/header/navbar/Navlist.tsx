import { useBreakpoints } from '@/hooks';
import { getMenuModeAntd } from '@/lib/utils';
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
	const mode = getMenuModeAntd(md);
	const { items } = getListNavItems();
	const selectedKeys = getSelectedKeysInStorage();
	const handleNavigate: MenuProps['onClick'] = (e) => {
		e.domEvent.preventDefault();
		navigate(e.key);
		saveSelectedKeysInStorage(e.key);
	};

	return (
		<Menu
			className='bg-inherit w-full font-merienda font-bold py-8 md:py-0'
			mode={mode}
			items={items}
			selectedKeys={selectedKeys}
			onClick={handleNavigate}
		/>
	);
};

export default Navlist;
