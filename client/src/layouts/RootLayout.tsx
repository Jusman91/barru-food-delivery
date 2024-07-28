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
			<main className='relative'>
				<Layout className='min-h-screen bg-gradient-to-br from-white to-primary-0/70 font-poppins'>
					<Navbar />
					<Outlet />
					<Footer />
				</Layout>
			</main>
		</ConfigProvider>
	);
};

export default RootLayout;
