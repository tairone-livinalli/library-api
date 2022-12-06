import express from 'express';
import mongoose from 'mongoose';

import env from './config/env';

mongoose
  .connect(env.mongoUrl)
  .then(() => {
    const app = express();

    app.use(express.json());

    app.listen(env.port, () => {
      console.log(`🚀 Server is running on http://localhost:/${env.port}`);
    });
  })
  .catch(() => console.log('Error while connecting to mongodb.'));
