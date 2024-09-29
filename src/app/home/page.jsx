import { auth } from "@/auth";
import Logout from "@/Components/Authentication/Logout";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import React from "react";

const HomePage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");
  // console.log(session.user.name);
  return (
    <div>
      <h2 className="p-4 m-4 text-3xl">Username: {session?.user.name}</h2>
      <Image
        src={session?.user?.image}
        width={72}
        height={72}
        className="rounded-full"
      ></Image>
      <Logout></Logout>
    </div>
  );
};

export default HomePage;
