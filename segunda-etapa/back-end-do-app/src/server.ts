import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import routes from './routes/index'

import './database';

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.use(routes);


app.listen(port, () => {
  console.log(`🚀 Listen http://localhost:3333/  🚀`);
});