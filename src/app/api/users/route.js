import { connectDB } from "@/lib/connectDB";

export async function GET() {
  const db = await connectDB();
  const users = await db.collection("users").find().toArray();
  return new Response(JSON.stringify(users), { status: 200 });
}


