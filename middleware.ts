import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');
  const isLoginURL = request.url.includes('/login');
  const shouldLoginURL = !request.url.includes('/login');

  const notShouldLogin = isLoginURL && accessToken;

  if (notShouldLogin) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const shouldLogin = shouldLoginURL && !accessToken;

  if (shouldLogin) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    '/',
    '/empty',
    '/add',
    '/edit',
    '/search',
    '/caculate',
    '/setting',
    '/login',
  ],
};
