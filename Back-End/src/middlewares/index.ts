import { Express } from 'express';
import helmet from './helmet';
import logToMongo from './logToMongo';
import setRequestId from './setRequestId';

export default (app: Express) => {
  setRequestId
  helmet(app);
  logToMongo(app);
};
