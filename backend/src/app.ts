import express = require('express');
import 'express-async-errors';
import { userRouter } from './database/routes';

const app = express();

app.use(userRouter)

app.use(express.json());

export default app;