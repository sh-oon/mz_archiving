import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const protectedRoutes: string[] = ['/my-page'];

type token = {
	key: string;
	value: string;
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	console.log(request.nextUrl.pathname);
	if (protectedRoutes.includes(request.nextUrl.pathname)) {
		const token = request.cookies.get('token');
		if (!request.nextUrl.pathname.startsWith('/login')) {
			if (!token) {
				const refresh = request.cookies.get('refresh_token');
				if (refresh) {
					request.cookies.set('token', 'new token');
					return NextResponse.next();
				} else {
					return NextResponse.redirect(new URL('/login', request.url));
				}
			}
		} else {
			if (token) {
				return NextResponse.redirect(new URL('/', request.url));
			}
		}
	}

	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - _next/public (public files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|static|.*\\..*|_next).*)',
	],
};