import { listNavObj } from '@/static';
import { MenuProps } from 'antd';
import { getListItem } from './getListItem';

export const getListNavItems = () => {
	const items: MenuProps['items'] = listNavObj.map(
		(item) => {
			return getListItem({
				key: item.key,
				label: item.label,
				icon: item.icon,
			});
		},
	);

	return { items };
};
