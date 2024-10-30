import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoggedIn = request.cookies.get('session') || sessionStorage.getItem('email');
  if ( isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
}

export const config = {
  matcher: ['/about/:path*', '/'], 
};
