// Adjust the path to your lib folder
import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const newUser = await request.json();
  // console.log(newUser);

  try {
    const db = await connectDB();
    // console.log(db);
    const userCollection = db.collection("users");

    // Check if the user already exists
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "User Exists" }, { status: 409 }); // Conflict if user exists
    }
    const hashPassword = bcrypt.hashSync(newUser.password, 15);

    // Insert new user
    const resp = await userCollection.insertOne({...newUser, password: hashPassword});
    return Response.json({ message: "user created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        message: "something went wrong from catch",
        error, // Provide a more specific error message
      },
      { status: 500 }
    );
  }
};
