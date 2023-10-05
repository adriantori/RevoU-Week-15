import { Express } from 'express'
import helmet from './helmet';
import morgan from './morgan';
import setRequestId from './setRequestId';

export default (app: Express) => {
    helmet(app);
    setRequestId;
    morgan(app);
}