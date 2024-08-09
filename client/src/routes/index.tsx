import {
	AuthLayout,
	DriversLayouts,
	MenusLayout,
	RestaurantsLayout,
	RootLayout,
} from '@/layouts';
import {
	About,
	Contact,
	DetailRestaurant,
	DetailUser,
	Drivers,
	ForgotPassword,
	Home,
	Login,
	Menus,
	NotFound,
	Register,
	ResetPassword,
	Restaurants,
	TokenExpired,
} from '@/pages';
import { useRoutes } from 'react-router-dom';

const Routes = () => {
	const element = useRoutes([
		{
			path: 'auth',
			element: <AuthLayout />,
			children: [
				{
					path: 'register',
					element: <Register />,
				},
				{
					path: 'login',
					element: <Login />,
				},
				{
					path: 'forgot_password',
					element: <ForgotPassword />,
				},
				{
					path: 'reset_password',
					element: <ResetPassword />,
				},
				{
					path: 'token_expired',
					element: <TokenExpired />,
				},
			],
		},
		{
			path: '',
			element: <RootLayout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: 'about',
					element: <About />,
				},
				{
					path: 'contact',
					element: <Contact />,
				},
				{
					path: 'profile/:id',
					element: <DetailUser />,
				},
				{
					path: 'menus',
					element: <MenusLayout />,
					children: [
						{
							path: '',
							element: <Menus />,
						},
					],
				},
				{
					path: 'restaurants',
					element: <RestaurantsLayout />,
					children: [
						{
							path: '',
							element: <Restaurants />,
						},
						{
							path: ':id',
							element: <DetailRestaurant />,
						},
					],
				},
				{
					path: 'drivers',
					element: <DriversLayouts />,
					children: [
						{
							path: '',
							element: <Drivers />,
						},
					],
				},
			],
		},
		{
			path: '*',
			element: <NotFound />,
		},
	]);

	return element;
};

export default Routes;
