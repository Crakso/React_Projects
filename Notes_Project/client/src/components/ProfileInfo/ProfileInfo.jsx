import React, { useState } from "react";
import { shortForm } from "../../utils/helper";

function ProfileInfo() {
  const [name, setName] = useState("Akki Bisht");
  return (
    <div className="flex items-center">
      <div className="bg-slate-400 cursor-pointer text-white text-center text-l font-bold w-10 rounded-full p-2 mx-2">
        {shortForm(name)}
      </div>
      <div className="mx-2 hidden lg:block md:block">{name}</div>
      <button
        className="bg-red-500 text-white hidden md:block lg:block rounded-xl p-2 ml-2"
        // onClick={onLogout}
      >
        {(name && "Logout") || "Login"}
      </button>
    </div>
  );
}

export default ProfileInfo;
