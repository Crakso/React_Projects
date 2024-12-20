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
      <div className="flex justify-center w-full items-center h-12 max-lg:justify-between bg-white shadow-md relative">
        <div className="flex items-center text-center absolute w-[80%] h-auto justify-center max-lg:w-full">
          <div className="text-white text-3xl font-bold ml-8 ">
            <Link to={"/"} className="bg-blue-600 px-1 rounded-md">
              in
            </Link>
          </div>
          <div className=" flex max-xl:bg-white bg-slate-200 justify-between mx-2 items-center p-1 rounded-lg text-slate-600 hover:text-black ">
            <IoSearchOutline className="max-xl:text-2xl max-xl:bg-white bg-slate-200 text-xl mx-1 cursor-pointer " />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-slate-200 max-xl:hidden w-64"
            />
          </div>
          <div className="flex lg:mx-6 bg-white text-center items-center justify-between w-full">
            <ul className="flex items-center w-[100%] justify-around bg-white">
              <li>
                <Link
                  to={"/"}
                  className="flex justify-center text-gray-500 hover:text-black flex-col items-center bg-white text-center"
                >
                  <IoHomeSharp className="text-2xl bg-white" />
                  <span className="max-lg:hidden text-xs">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/mynetwork"}
                  className="flex justify-center text-gray-500 hover:text-black flex-col items-center text-center bg-white"
                >
                  <MdPeople className="text-2xl bg-white" />
                  <span className="max-lg:hidden text-center text-xs">
                    My Network
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/jobs"}
                  className="flex justify-center flex-col text-gray-500 hover:text-black items-center text-center bg-white"
                >
                  <IoBag className="text-2xl bg-white" />
                  <span className="max-lg:hidden text-xs ">Jobs</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/messaging"}
                  className="flex justify-center flex-col text-gray-500 hover:text-black bg-white items-center text-center"
                >
                  <IoChatbubbleEllipsesSharp className="text-2xl bg-white" />
                  <span className="max-lg:hidden text-xs "> Messaging</span>
                </Link>
              </li>
              <li className="">
                <Link
                  to={"/notifications"}
                  className="flex justify-center flex-col bg-white text-gray-500 hover:text-black items-center text-center "
                >
                  <BiSolidBell className="text-2xl bg-white" />
                  <span className="max-lg:hidden text-xs">Notifications</span>
                </Link>
              </li>
            </ul>
            <span className="flex items-center justify-center text-gray-500 hover:text-black">
              <Link
                to={"/profile"}
                className="flex flex-col items-center justify-center max-sm:hidden bg-white"
              >
                <img
                  src="/assets/photo.jpeg"
                  alt="Image"
                  className="rounded-full h-7 w-7 bg-white"
                />
                <span className="max-lg:hidden text-xs">Me</span>
              </Link>
            </span>
          </div>
          <div className="flex w-[50%] mx-6 max-lg:mr-2 max-sm:hidden justify-evenly  lg:justify-evenly lg:gap-4 bg-white">
            <Link className="flex flex-col max-lg:justify-center justify-between items-center bg-white text-gray-500 hover:text-black">
              <TbGridDots className="text-2xl bg-white" />
              <h3 className="max-lg:hidden text-xs bg-white">For Business</h3>
            </Link>
            <Link className="flex flex-col justify-between items-center text-gray-500 bg-white hover:text-black cursor-pointer text-xs">
              <FaRegSquare className="text-xl bg-orange-300 text-orange-300 rounded-md" />
              <h3 className="max-lg:text-xs bg-white">Try Premium for $0</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
