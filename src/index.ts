import express from 'express';
import mongoose from 'mongoose';

import env from './config/env';
import { cors } from './middlewares/corsMiddleware';
import router from './routes';

mongoose
  .connect(env.mongoUrl)
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(cors);
    app.use('/api', router);

    app.listen(env.port, () => {
      console.log(`🚀 Server is running on http://localhost:${env.port}/`);
    });
  })
  .catch(() => console.log('Error while connecting to mongodb.'));
