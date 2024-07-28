import type { ThemeConfig } from 'antd';
import { theme } from 'antd';
import { myColors } from './color';

const { darkAlgorithm, defaultAlgorithm } = theme;

export const themeToken = (myTheme: string) => {
	const darkTheme = myTheme === 'dark';
	const rootTheme: ThemeConfig = {
		token: {
			colorBgBase:
				myTheme === 'dark' ? myColors.dark : undefined,
			colorPrimary: myColors.primary[40],
		},
		components: {
			Menu: {
				itemSelectedBg: myColors.primary[30],
				itemSelectedColor: myColors.white,
				itemHoverBg: myColors.primary[10],
				itemHeight: 45,
				itemBorderRadius: 30,
				// colorBgContainer: undefined,
			},
			// Layout: {
			// 	siderBg: undefined,
			// },
		},
		algorithm:
			myTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
	};

	const authTheme: ThemeConfig = {
		token: {
			colorBgBase:
				myTheme === 'dark' ? myColors.dark : undefined,
			colorPrimary: myColors.primary[40],
		},
		// components: {
		// 	Input: {
		// 		colorBgContainer: '#f8fafc',
		// 	},
		// 	Button: {
		// 		colorTextDisabled: darkTheme
		// 			? '#2548a8'
		// 			: undefined,
		// 	},
		// 	Modal: {
		// 		colorIcon: darkTheme ? '#fff' : '#2548a8',
		// 		colorIconHover: darkTheme ? '#2548a8' : '#fff',
		// 		borderRadiusLG: 16,
		// 	},
		// },
		algorithm: darkTheme ? darkAlgorithm : defaultAlgorithm,
	};

	return { rootTheme, authTheme };
};
