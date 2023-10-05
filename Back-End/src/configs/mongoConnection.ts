import { MongoClient, Db } from 'mongodb';

let db: Db;

async function connect(uri: string, dbName: string): Promise<void> {
  const client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);
}

function getDb(): Db {
  if (!db) {
    throw new Error('Database connection not established.');
  }
  return db;
}

export { connect, getDb };
