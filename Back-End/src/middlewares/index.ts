import { Express } from 'express';
import helmet from './helmet';
import morgan from './morgan';
import setRequestId from './setRequestId';
import mongoMiddleware from './mongoConnect';

export default (app: Express) => {
  helmet(app);
  setRequestId;
  app.use(mongoMiddleware);
  morgan(app);
};
