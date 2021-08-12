import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const startServer = () => {
  const app: Application = express();
  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`Server up on port:${port}`);
  });
};

startServer();
