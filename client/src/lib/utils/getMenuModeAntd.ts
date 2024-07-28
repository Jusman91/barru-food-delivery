import { MenuProps } from 'antd';

export function getMenuModeAntd(
	breakpoint: boolean | undefined,
) {
	let mode: MenuProps['mode'];

	switch (breakpoint) {
		case true:
			mode = 'horizontal';
			break;
		case false:
			mode = 'vertical';
			break;
		default:
			mode = 'horizontal';
			break;
	}
	return mode;
}
