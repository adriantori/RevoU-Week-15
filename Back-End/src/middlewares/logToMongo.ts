import { Express, Request } from 'express';
import { Collection } from 'mongodb';
import morgan from 'morgan';

async function logToMongo(req: Request) {
  try {
    const db = req.db;

    if (!db) {
      console.error('Database instance not available.');
      return;
    }

    const morganLogsCollection: Collection = db.collection('morganLogs');

    const morganStream = {
      write: async (logData: string) => {
        try {
          const parsedLogData = JSON.parse(logData);
          const logEntry = { log: parsedLogData }; // Modify this based on your log data structure

          await morganLogsCollection.insertOne(logEntry);
        } catch (error) {
          console.error('Error parsing or logging Morgan log data:', error);
        }
      }
    };

    // Use Morgan with the custom stream
    morgan('combined', { stream: morganStream });

  } catch (error: any) {
    console.error('Error setting up Morgan for logging to MongoDB:', error);
  }
}

export default logToMongo;
