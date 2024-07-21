import { listNavObj } from '@/static';
import { IlistNav } from '@/types';
import { MenuProps } from 'antd';

export const getListNavItems = () => {
	function getItem({
		key,
		label,
		icon,
		children,
	}: IlistNav): IlistNav {
		return {
			key,
			label,
			icon,
			children,
		};
	}
	const items: MenuProps['items'] = listNavObj.map(
		(item) => {
			return getItem({
				key: item.key,
				label: item.label,
				icon: item.icon,
			});
		},
	);

	return { items };
};
