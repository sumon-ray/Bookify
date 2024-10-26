import { NextResponse } from "next/server";

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check if the request is for an API route and allow it through
  if (pathname.includes("api")) {
    return NextResponse.next();
  }

  // Get the session cookie from the headers
  const sessionToken = request.cookies.get("next-auth.session-token") || request.cookies.get("__Secure-next-auth.session-token");

  // If there is no session token, redirect to login page with redirect back to the original page
  if (!sessionToken) {
    const loginUrl = new URL(`/login`, request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If session token is present, allow the request through
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/details/:path*" , "/exchange", "/rentbooks"],
};
