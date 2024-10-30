import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoggedIn = request.cookies.get('session') || sessionStorage.getItem('email');
  if ( isLoggedIn) {
    console.log(isLoggedIn,'isLoggedIn');
    
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }else{
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
}

export const config = {
  matcher: ['/about/:path*', '/'], 
};
