import { ThemeContext } from '@/contexts';
import { IErrorUseContext, IThemeContext } from '@/types';
import { useContext } from 'react';

const throwError = ({
	context,
	message,
}: IErrorUseContext) => {
	if (!context) {
		throw Error(
			`use${message} must be used inside an ${message}Provider`,
		);
	}
};

export function useThemeContext(): IThemeContext {
	const context = useContext(ThemeContext);
	throwError({ context, message: 'ThemeContext' });
	return context as IThemeContext;
}
