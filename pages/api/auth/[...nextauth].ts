import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';

export default NextAuth({
  session: {
    maxAge: 60,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY || '',
      // allowDangerousEmailAccountLinking: true,
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || '',
      clientSecret: process.env.KAKAO_SECRET_KEY || '',
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        provider: token.provider || '',
      };
    },
    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
  },
});
