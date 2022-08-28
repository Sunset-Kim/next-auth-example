import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import TwitchProvider from "next-auth/providers/twitch";

export const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET!,
    }),
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID!,
      clientSecret: process.env.TWITCH_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin

      if (account) {
        console.log("jwt", account, token);
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }
      console.log(token);
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.

      session.accessToken = token.accessToken;
      session.provider = token.provider;
      return session;
    },
  },
};

export default NextAuth(authOption);
