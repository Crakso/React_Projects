import React from "react";
import { Link } from "react-router-dom";
import {
  IoBag,
  IoChatbubbleEllipsesSharp,
  IoHomeSharp,
  IoSearchOutline,
} from "react-icons/io5";
import { BiSolidBell } from "react-icons/bi";
import { MdPeople } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { FaRegSquare } from "react-icons/fa6";

function Header() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-12 max-md:justify-between bg-white shadow-lg ">
        <div className=" bg-blue-600 px-1 text-white text-3xl font-bold mx-2 cursor-pointer rounded-md">
          <Link to={"/"}>in</Link>
        </div>
        <div className=" flex max-lg:bg-white bg-slate-200 justify-between mx-2 items-center p-1 rounded-lg text-slate-600 hover:text-black">
          <IoSearchOutline className="max-lg:text-2xl text-xl mx-1 cursor-pointer " />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-slate-200 max-lg:hidden w-64"
          />
        </div>
        <div className="flex max-sm:mx-2 mx-4 max-md:gap-12 gap-16 lg:ml-24 ">
          <ul className="flex justify-between items-center max-sm:gap-8 sm:gap-12 gap-16">
            <li>
              <Link
                to={"/"}
                className="flex justify-center text-gray-500 hover:text-black flex-col items-center text-center hover:text-black"
              >
                <IoHomeSharp className="text-2xl " />
                <h3 className="max-lg:hidden text-sm">Home</h3>
              </Link>
            </li>
            <li>
              <Link
                to={"/mynetwork"}
                className="flex justify-center text-gray-500 hover:text-black flex-col items-center text-center"
              >
                <MdPeople className="text-2xl" />
                <span className="max-lg:hidden text-sm"> My Network</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/jobs"}
                className="flex justify-center flex-col text-gray-500 hover:text-black items-center text-center"
              >
                <IoBag className="text-2xl " />
                <span className="max-lg:hidden text-sm ">Jobs</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/messaging"}
                className="flex justify-center flex-col text-gray-500 hover:text-black items-center text-center"
              >
                <IoChatbubbleEllipsesSharp className="text-2xl " />
                <span className="max-lg:hidden text-sm"> Messaging</span>
              </Link>
            </li>
            <li className="">
              <Link
                to={"/notifications"}
                className="flex justify-center flex-col text-gray-500 hover:text-black items-center text-center "
              >
                <BiSolidBell className="text-2xl" />
                <span className="max-lg:hidden text-sm">Notifications</span>
              </Link>
            </li>
          </ul>
          <span className="flex items-center justify-center text-gray-500 hover:text-black">
            <Link
              to={"/profile"}
              className="flex flex-col items-center justify-center max-sm:hidden"
            >
              <img
                src="/assets/photo.jpeg"
                alt="Image"
                className="rounded-full h-7 w-7"
              />
              <h3 className="max-lg:hidden text-xs">Me</h3>
            </Link>
          </span>
        </div>
        <div className="flex gap-8 mx-6 max-lg:mr-2 max-sm:hidden  justify-between">
          <Link className="flex flex-col justify-center items-center text-gray-500 hover:text-black">
            <TbGridDots className="text-2xl" />
            <h3 className="max-lg:hidden text-sm ">For business</h3>
          </Link>
          <Link className="flex flex-col justify-center items-center text-gray-500 hover:text-black cursor-pointer">
            <FaRegSquare className="text-xl bg-orange-300 text-orange-300 rounded-md" />
            <h3 className="max-lg:text-sm ">Try Premium for $0</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
