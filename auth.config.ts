import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      
      if (isOnDashboard) {
        // Allow access to dashboard only if logged in
        if (isLoggedIn) return true;
        // Redirect to login if not logged in
        return Response.redirect(new URL('/login', nextUrl));
      }
      
      // Redirect to dashboard if already logged in and trying to access other pages
      if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      
      // Allow access to public pages
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
};