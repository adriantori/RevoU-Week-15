import { Express, Request, Response, NextFunction } from 'express';
import helmet from './helmet';
import logToMongo from './logToMongo';
import setRequestId from './setRequestId';
import mongoMiddleware from './mongoMiddleware';

export default (app: Express) => {
  helmet(app);
  setRequestId;
  app.use((req: Request, res: Response, next: NextFunction) => {
    mongoMiddleware(req, res, next);
    logToMongo(req, app);
  });
};
