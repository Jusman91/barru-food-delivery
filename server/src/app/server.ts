import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

const createServer = () => {
	const app = express();

	// middleware
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cors());
	app.use(morgan('dev'));
	app.use(cookieParser());

	// routes

	// error handler should be the last middleware

	return app;
};

export default createServer;
