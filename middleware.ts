import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const token = request.cookies.get('token');
	if (!token) {
		const refresh = request.cookies.get('refresh_token');
		if (refresh) {
			// refresh token
			// ...
			// set new token
			request.cookies.set('token', 'new token');
			return NextResponse.next();
		} else {
			return NextResponse.redirect('/login');
		}
	}
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