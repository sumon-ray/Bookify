import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  try {
    const db = await connectDB;
    const userCollection = db.collection("users");

    // fetch all data
    const users = await userCollection.find().toArray();

    // response with the users data
    return Response.json(users, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        message: "Failed to fetch users",
        error, // Return specific error for debugging
      },
      { status: 500 }
    );
  }
};
