import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import timeout from 'connect-timeout';
import { renderToString } from 'react-dom/server';
import html from './html';
import Router from './app/RootRouter';
import routes from './routes';

dotenv.config();

const app = express();

app.use([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  cors(),
  helmet(),
  compression(),
  timeout('30s'),
]);

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.use('/api', routes);

app.use('**', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.charset = 'utf-8';
  res.send(
    html({
      title: 'MyBlog',
      body: renderToString(Router),
    }),
  );
});

export default app;
