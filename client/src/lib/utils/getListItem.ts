import { IlistItem } from '@/types';

export function getListItem({
	key,
	label,
	icon,
	children,
}: IlistItem): IlistItem {
	return {
		key,
		label,
		icon,
		children,
	};
}
