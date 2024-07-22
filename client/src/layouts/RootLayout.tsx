import { Footer, Navbar } from '@/components';
import { useThemeContext } from '@/hooks';
import { themeToken } from '@/theme';
import { ConfigProvider, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	const { myTheme } = useThemeContext();
	const { rootTheme } = themeToken(myTheme);
	return (
		<ConfigProvider theme={rootTheme}>
			<main className='relative px-8'>
				<Layout className='bg-bkg-base font-poppins'>
					<Navbar />
					<Outlet />
					<Footer />
				</Layout>
			</main>
		</ConfigProvider>
	);
};

export default RootLayout;
