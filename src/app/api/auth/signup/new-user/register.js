// pages/api/auth/signin.js
import connectDB from "@/lib/connectDB";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  try {
    const db = await connectDB();
    const userCollection = db.collection('users'); // Create a 'users' collection if it doesn't exist

    // Extract user data from request body
    const { name, email } = req.body;

    // Check if user already exists
    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Insert new user into the 'users' collection
    const result = await userCollection.insertOne({ name, email, createdAt: new Date() });

    return res.status(201).json({ message: "User signed in successfully", userId: result.insertedId });
  } catch (error) {
    console.error("Error inserting user:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
