import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
// import { getUserByEmail } from "@/app/services/registerService";
// import { signIn } from "next-auth/react";
// import { prisma } from "@/prisma/prisma";
import { loginUser } from "@/app/service/loginService";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        console.log("Credentials : ", credentials);
        const response = await fetch(
          "http://110.74.194.123:8989/api/todo/v1/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );
        // const user = await response();
        const login = {
          email: credentials?.email,
          password: credentials?.password,
        };
        const user = await loginUser(login);
        console.log("Response user : ", user);
        if (user?.token) {
          return response;
        } else {
          return null;
        }
        return user;
      },
    }),

    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
