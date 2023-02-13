import express from 'express';
import carsRouter from './Routes/Routes';

const app = express();

app.use(express.json());

app.use('/cars', carsRouter);

export default app;
