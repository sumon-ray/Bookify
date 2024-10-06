const { cookies } = require("next/headers");
const { NextResponse } = require("next/server");

export const middleware = async (request) => {
  // const token = cookies(request).get("__Secure-next-auth.session-token");
  // // console.log(token);

  // // if (!token) {
  // //   return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  // // }
  // return NextResponse.next();
};

// export const config = {
//   matcher: ["/dashboard"],
// };
