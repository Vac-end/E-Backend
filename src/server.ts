import app from './app';
import { sequelize } from './models/index';
import { envConfig } from './config/env.config';
import { logger } from './utils/logger';

const PORT = envConfig.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    logger.info('Database connected');
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((err: any) => {
    logger.error('Database connection failed', err);
    process.exit(1);
  });