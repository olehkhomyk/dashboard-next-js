import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	pages: {
		signIn: '/login',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
			const publicPaths = ['/contact-us']

			const usPublicPaths = publicPaths.some((path) => nextUrl.pathname.startsWith(path));

			if (isOnDashboard) {
				if (isLoggedIn) {
					return true;
				}

				return false; // Redirect unauthenticated users to login page
			} else if (usPublicPaths) {
				return true;
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/dashboard', nextUrl));
			}

			return true;
		}
	},
	providers: []
} satisfies NextAuthConfig;
