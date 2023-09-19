import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');

  if (!accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// TODO: 매칭시킬 url 패턴을 입력
export const config = {
  matcher: '/',
};
