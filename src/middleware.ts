import NextAuth from "next-auth"
import authConfig from "@/config/auth-config"
import {
  DEFAULT_LOGIN_REDIRECT,
  AUTH_PREFIX_API,
  AUTH_ROUTES,
  PUBLIC_ROUES,
} from '@/lib/app-routes'
import type { NextRequest } from "next/server"

const { auth } = NextAuth(authConfig)
 
export default auth((req: NextRequest) => {
  const { nextUrl } = req
  const isLoggedIn = !!(req as any).auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(AUTH_PREFIX_API)
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname)
  const isPublicRoute = PUBLIC_ROUES.includes(nextUrl.pathname)

  if (isApiAuthRoute) {
    return
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return
  }
  
  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname
    if (nextUrl.search) {
      callbackUrl += nextUrl.search
    }

    const encondedCallbackUrl = encodeURIComponent(callbackUrl) 

    return Response.redirect(new URL(`/auth/login?callbackUrl=${encondedCallbackUrl}`, nextUrl))
  }

  return
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// export const config2 = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// }