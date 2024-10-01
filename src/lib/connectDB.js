import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    console.log("Connecting to database...");
    console.log(uri); // This will print the URI to ensure it's loaded correctly

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect(); // Ensure the client is connected before accessing the database

    db = client.db("Bookify");
    console.log("Connected successfully to MongoDB Atlas");
    return db;
  } catch (error) {
    console.log("Failed to connect to the database:", error);
  }
};
