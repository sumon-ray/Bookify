import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
});

const users = [
  {
    id: 1,
    name: "Naeem",
    email: "n@gmail.com",
    password: "password",
  },
  {
    id: 2,
    name: "Mannan",
    email: "m@gmail.com",
    password: "password",
  },
  {
    id: 3,
    name: "Momin",
    email: "Mo@gmail.com",
    password: "password",
  },
];

export { handler as GET, handler as POST };
