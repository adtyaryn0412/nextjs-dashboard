
import { auth } from '@/auth';

export default auth((req) => {
  // req.auth is available, and req.auth.user is available
});

export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};