import {
	getThemeInStorage,
	saveThemeToStorage,
} from '@/lib/utils/storage';
import { IThemeContext } from '@/types';
import {
	createContext,
	ReactNode,
	useEffect,
	useMemo,
	useState,
} from 'react';

const initialValue = {
	myTheme: 'light',
	toggleMyTheme: () => {},
};

export const ThemeContext =
	createContext<IThemeContext>(initialValue);

export const ThemeContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [myTheme, setMyTheme] = useState(
		getThemeInStorage() || 'light',
	);
	const toggleMyTheme = () => {
		setMyTheme((prev) => {
			const newTheme = prev === 'light' ? 'dark' : 'light';
			saveThemeToStorage(newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		if (myTheme === 'dark') {
			document.documentElement.setAttribute(
				'data-theme',
				'dark',
			);
		} else {
			document.documentElement.removeAttribute(
				'data-theme',
			);
		}
	}, [myTheme]);

	const value = useMemo(() => {
		return {
			myTheme,
			toggleMyTheme,
		};
	}, [myTheme]);
	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};
