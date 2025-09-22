import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { envConfig } from './config/env.config';
import { logger } from './utils/logger';
import routes from './routes';
import { errorHandler } from './middlewares/error.middleware';
import { notFoundHandler } from './middlewares/notFound.middleware';

const app: Application = express();

// Middlewares globales
app.use(helmet());
app.use(cors({ origin: envConfig.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Server is running', timestamp: new Date().toISOString() });
});

app.use('/api', routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;