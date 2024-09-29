import { doLogout } from "@/app/actions";
import React from "react";

const Logout = () => {
  return (
    <form action={doLogout}>
      <button
        className="btn text-[16px] lg:block hidden border-2 border-[#064532] p-3 px-4 rounded-lg"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
