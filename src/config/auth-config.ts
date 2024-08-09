import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { loginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { compare } from "bcryptjs";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET  as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID  as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const isPassowordValid = await compare(password, user.password);

          if (isPassowordValid) return user;
        }

        return null;
      },
      credentials: {
        email: {
          type: "email",
          label: "Email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
    }),
  ],
} satisfies NextAuthOptions;
