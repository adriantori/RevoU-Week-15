import { Request, Response, NextFunction } from 'express';
import MongoConnection from '../configs/mongoConnection';

async function mongoMiddleware(req: Request, res: Response, next: NextFunction) {
  const uri = 'mongodb+srv://adriantori:adri123@cluster0.3u5txct.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URI
  const dbName = 'RevoU_w15'; // Replace with your actual database name

  try {
    await MongoConnection.connect(uri, dbName);
    req.app.locals.db = MongoConnection.getDb(); // Store db in app.locals
    next();
  } catch (error) {
    next(error);
  }
}

export default mongoMiddleware;
