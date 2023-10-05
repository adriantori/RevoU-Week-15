import { Request, Express } from 'express';
import { Db, Collection } from 'mongodb';
import morgan from 'morgan';

async function logToMongo(app: Express) {
  try {
    const db: Db = app.locals.db; // Assuming db is set in app.locals by mongoMiddleware
    const morganLogsCollection: Collection = db.collection('morganLogs');

    const morganStream = {
      write: (logData: string) => {
        try {
          const parsedLogData = JSON.parse(logData);
          const logEntry = { log: parsedLogData }; // Modify this based on your log data structure

          morganLogsCollection.insertOne(logEntry);
        } catch (error) {
          console.error('Error parsing Morgan log data:', error);
        }
      }
    };

    app.use(morgan('combined', { stream: morganStream }));
  } catch (error: any) {
    console.error('Error logging to MongoDB:', error);
  }
}

export default logToMongo;
