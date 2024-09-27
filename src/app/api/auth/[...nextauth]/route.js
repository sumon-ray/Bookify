import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          required: true,
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) return currentUser;
          }
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.type = user.type;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    name: "Naeem",
    email: "n@gmail.com",
    type: "Admin",
    password: "password",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Sumon",
    email: "s@gmail.com",
    type: "Modarator",
    password: "password",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Afser",
    email: "a@gmail.com",
    type: "Guest",
    password: "password",
    image: "https://picsum.photos/200",
  },
];

export { handler as GET, handler as POST };