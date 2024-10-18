// const { NextResponse } = require("next/server");

// export const middleware = async (request) => {
//   const cookies = request.cookies.get("next-auth.session-token");
//   // console.log(cookies);
//   const pathname = request.nextUrl.pathname;
//   if (pathname.includes("api")) {
//     return NextResponse.next();
//   }
//   if (!cookies) {
//     return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
//   }

//   return NextResponse.next();
// };

export const config = {
  // matcher: ["/dashboard/:path*", '/details/:path*'],
};
