import React, { useState } from "react";
import { FaPlus, FaRegSquare } from "react-icons/fa6";
import {
  MdKeyboardArrowDown,
  MdGroups2,
  MdEventAvailable,
} from "react-icons/md";
import { PiTagChevronFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function LeftBar() {
  const [name, setName] = useState("Akki Bisht");
  const [desc, setDesc] = useState(
    "Student at Institute of Technology Gopeshwar."
  );
  const [address, setAddress] = useState("Srinagar, Uttarakhand");
  const [ConnectionsCount, setConnectionsCount] = useState(22);
  return (
    <>
      <div>
        <div className=" bg-white w-[80%] border-2 rounded-lg flex flex-col relative">
          <img
            src="https://img.freepik.com/premium-photo/blue-paper-linkedin-abstract-background_608068-5080.jpg?semt=ais_hybrid"
            alt="coverImg"
            className="h-16 w-full rounded-t-lg cursor-pointer"
          />
          <div className=" absolute w-[4.5rem] h-[4.5rem] mt-8 ml-5 rounded-full bg-slate-400 text-center flex items-center justify-center">
            Profile
          </div>
          <div className="flex flex-col relative mt-12 mx-6 mb-4">
            <span className="font-semibold text-lg">{name}</span>
            <span className="text-xs">{desc}</span>
            <span className="text-xs text-slate-400">{address}</span>
            <button className="w-full bg-[#eaeaea] text-slate-600 px-2 py-1 border-dotted border-slate-400 gap-2 rounded-md  border-2 my-2 flex items-center text-xs hover:bg-neutral-300 hover:border-neural-500 hover:border-dashed">
              <FaPlus />
              Experience
            </button>
          </div>
        </div>
        <div className="">
          <Link className="bg-white w-[80%] rounded-lg flex flex-col p-3 mt-2 border-2 text-xs justify-center gap-1">
            <p className="text-gray-500">Discover your next customer</p>
            <span className="font-semibold flex flex-row gap-2">
              <FaRegSquare className="text-sm bg-orange-300 text-orange-300 rounded-sm" />
              <h4>Try Sales Nav for ₹0</h4>
            </span>
          </Link>
        </div>
        <div className="connections">
          <Link className="bg-white w-[80%] flex flex-col font-semibold text-xs p-3 border-2 mt-2 rounded-lg hover:underline justify-center gap-1">
            <span className="flex justify-between ">
              <h3 className="">Connections</h3>
              <p className="text-blue-400">{ConnectionsCount}</p>
            </span>
            <p className="text-gray-500">Grow your network</p>
          </Link>
        </div>
        <div className="options flex flex-col bg-white w-[80%] border-2 gap-3 rounded-lg mt-2 justify-center p-3 text-xs font-semibold">
          <Link to="/" className="flex items-center gap-2">
            <PiTagChevronFill className="text-lg rotate-90" />
            <button>Saved items</button>
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <MdGroups2 className="text-lg" />
            <button>Groups</button>
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <MdEventAvailable className="text-lg" />
            <button>Events</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LeftBar;
