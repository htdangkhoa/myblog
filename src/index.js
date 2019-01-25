import dotenv from 'dotenv';
import os from 'os';
import cluster from 'cluster';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();

const { PORT, DB, NODE_ENV } = process.env;

const isDev = NODE_ENV !== 'production';

const cpus = os.cpus().length;

global.data = {
  code: 200,
  payload: null,
  error: null,
};

mongoose.connect(
  DB,
  { useNewUrlParser: true },
  (error) => {
    if (error) throw error;

    console.warn('Connect to DB success.');
  },
);

if (isDev) {
  app.listen(process.env.PORT, () => {
    console.warn(`Serving on http://localhost:${PORT}`);
  });
} else if (cluster.isMaster) {
  console.warn(`Server is running on port: ${process.env.PORT}`);
  console.warn(`Master ${process.pid} is running...`);

  for (let i = 0; i < cpus; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.warn(`Worker ${worker.process.pid} died (${signal || code}). Restarting...`);

    cluster.fork();
  });
} else {
  app.listen(process.env.PORT, () => {
    console.warn(`Worker ${process.pid} started.`);
  });
}
