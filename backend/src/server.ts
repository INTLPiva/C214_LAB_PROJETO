import 'reflect-metadata';

import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Back-end Started!');
});
