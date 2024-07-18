import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import usersRoutes from '../routes/users';
import restaurantsRoutes from '../routes/restaurants';
import driversRoutes from '../routes/drivers';
import menusRoutes from '../routes/menus';
import categoriesRoutes from '../routes/categories';
import { BASE_URL } from '../config';
import { errorHandler } from '../middleware';

const createServer = () => {
	const app = express();

	// middleware
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cors());
	app.use(morgan('dev'));
	app.use(cookieParser());

	// routes
	app.use(`${BASE_URL}/users`, usersRoutes);
	app.use(`${BASE_URL}/restaurants`, restaurantsRoutes);
	app.use(`${BASE_URL}/drivers`, driversRoutes);
	app.use(`${BASE_URL}/menus`, menusRoutes);
	app.use(`${BASE_URL}/categories`, categoriesRoutes);

	// error handler should be the last middleware
	app.use(errorHandler);

	return app;
};

export default createServer;
