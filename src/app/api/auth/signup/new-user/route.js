import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB();
    console.log(db)
    const userCollection = db.collection("Bookify");
    const newUser = await request.json();
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: "new User Created" });
  } catch (error) {
    return Response.json({ message: "something went wrong" });
  }
};
