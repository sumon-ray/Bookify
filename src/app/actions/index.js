"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData) {
  //   console.log(formData);
  const action = formData.get("action");
  //   console.log(action);
  // redirect url
  await signIn(action, { redirectTo: "/" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
