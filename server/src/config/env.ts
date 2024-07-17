import * as dotenv from 'dotenv';
dotenv.config();

const { BASE_URL, DATABASE_URL } = process.env;

export { BASE_URL, DATABASE_URL };
