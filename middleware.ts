import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("nextjs-con-de-tuti", "Buenas-buenas-mi-gente");

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (request.nextUrl.pathname.endsWith("/information")) {
    return NextResponse.redirect(
      new URL("/information/charactes", request.url)
    );
  }

  if (request.nextUrl.pathname.startsWith("/information")) {
    const user = {
      name: "John Doe",
      authenticated: "false",
    };
    if (user.authenticated !== "true") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
};

export const config = {
  matcher: [
    "/information/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};