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

export async function PUT(req, { params }) {
  const db = await connectDB();
  const { id } = params; // The user ID
  const data = await req.json();

  try {
    const result = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: data });

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "User updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(
      JSON.stringify({ message: "Error updating user", error: error.message }),
      { status: 500 }
    );
  }
}

export async function PATCH(req, { params }) {
  const db = await connectDB();
  const { id } = params;
  const { role } = await req.json(); // Extract the role from the request body

  try {
    // Update the user's role dynamically
    const result = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: { role: role } });

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: `User role updated to ${role} successfully` }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user role:", error);
    return new Response(
      JSON.stringify({
        message: "Error updating user role",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
