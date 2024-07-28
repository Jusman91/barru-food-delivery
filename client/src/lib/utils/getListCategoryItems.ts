import { MenuProps } from 'antd';
import { getListItem } from './getListItem';
import { listCategoryObj } from '@/static';

export function getListCategoryItems() {
	const items: MenuProps['items'] = listCategoryObj.map(
		(item) => {
			return getListItem({
				key: item.key,
				label: item.label,
				icon: item.icon,
			});
		},
	);

	return { items };
}
