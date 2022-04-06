import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import helloController from "./controllers/hello-controller.js";
import userController from './controllers/user-controller.js';
import tuitsController from './controllers/tuits-controller.js';

const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PW;
const DBURI =
  "web-dev-db.rrn6e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PW}@${DBURI}`);

const app = express();
app.use(express.json());
app.use(cors());

helloController(app);
userController(app);
tuitsController(app);


app.listen(process.env.PORT || 4000);