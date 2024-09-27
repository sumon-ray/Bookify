// lib/connectDB.js
import { MongoClient } from "mongodb";

let db;
let client;

const connectDB = async () => {
  if (db) return db; // Return the cached DB connection

  const uri = process.env.MONGODB_URI; // Use environment variable for MongoDB connection

  if (!uri) {
    throw new Error("Please define the MONGODB_URI in .env.local");
  }

  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  db = client.db("yourDatabaseName"); // replace with your DB name
  return db;
};

export default connectDB;
