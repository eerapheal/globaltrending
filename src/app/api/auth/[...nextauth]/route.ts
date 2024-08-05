import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";

const githubClientId = process.env.clientId_GITHUB!;
const githubClientSecret = process.env.clientSecret_GITHUB!;
const googleClientId = process.env.clientId_GOOGLE!;
const googleClientSecret = process.env.clientSecret_GOOGLE!;

const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.name = `${session?.user?.name}_${token?.sub}`;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "default_secret_key",
};

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };
