import { Express } from 'express';
import helmet from './helmet';
import logToMongo from './logToMongo';
import setRequestId from './setRequestId';

export default (app: Express) => {
  const requestIdMiddleware = setRequestId();
  app.use(requestIdMiddleware);
  helmet(app);
  logToMongo(app);
};
