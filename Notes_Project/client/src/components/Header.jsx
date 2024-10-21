import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Cards from "./Cards/NoteCards";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-full">
      <div className="bg-white w-full flex items-center justify-between px-10 py-4 drop-shadow-xl">
        <Link to={"/"}>
          <h2 className="font-bold text-xl cursor-pointer">
            <span className="text-slate-500">Good</span>
            <span className="">Notes</span>
          </h2>
        </Link>
        <SearchBar />
        <ProfileInfo />
      </div>
    </div>
  );
}

export default Header;
