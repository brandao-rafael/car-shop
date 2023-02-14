import express from 'express';
import carsRouter from './Routes/CarRoutes';
import motorcycleRouter from './Routes/MotorcycleRoutes';

const app = express();

app.use(express.json());

app.use('/cars', carsRouter);

app.use('/motorcycles', motorcycleRouter);

export default app;
