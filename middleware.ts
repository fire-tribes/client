import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');
  const isRequiredLoginURL = !request.url.includes('/login');

  if (!accessToken && isRequiredLoginURL) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/', '/empty', '/add', '/edit', '/search', '/caculate', '/setting'],
};
