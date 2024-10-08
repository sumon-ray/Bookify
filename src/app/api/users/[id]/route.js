import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export async function DELETE(req, { params }) {
  const db = await connectDB();
  const { id } = params;

  try {
    const result = await db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "User deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return new Response(
      JSON.stringify({ message: "Error deleting user", error: error.message }),
      { status: 500 }
    );
  }
}
