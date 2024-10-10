import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 30 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          return null;
        }
        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          return null;
        }

        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email, image } = user;
        try {
          const db = await connectDB();
          const userCollection = db.collection("users");

          // Check if the user already exists
          const userExist = await userCollection.findOne({ email });

          if (!userExist) {
            // Only insert necessary fields
            const newUser = {
              name,
              email,
              image,
              role: "user",
              createdAt: new Date(),
            };
            const res = await userCollection.insertOne(newUser);
            return user; // Sign in the user after adding to the DB
          } else {
            return user; // User exists, continue sign in
          }
        } catch (error) {
          console.error("Error during sign-in:", error);
          return false; // Return false to block sign in in case of error
        }
      } else {
        return user; // For other providers, allow sign in
      }
    },
  },
});

export { handler as GET, handler as POST };
