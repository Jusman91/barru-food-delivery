import { Footer, Navbar } from '@/components';
import { ConfigProvider, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<ConfigProvider>
			<main className='relative'>
				<Layout>
					<Navbar />
					<Outlet />
					<Footer />
				</Layout>
			</main>
		</ConfigProvider>
	);
};

export default RootLayout;
