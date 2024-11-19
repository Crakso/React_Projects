import React, { useState } from "react";
import { FaPlus, FaRegImage } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiArticleNyTimes } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Top() {
  const [name, setName] = useState("Akki Bisht");
  const [desc, setDesc] = useState(
    "Student at Institute of Technology Gopeshwar."
  );
  const [address, setAddress] = useState("Srinagar, Uttarakhand");
  return (
    <>
      <div className="md:hidden">
        <div>
          <div className=" bg-white w-full border-2 rounded-lg flex flex-col relative">
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
        </div>
        <span className="flex text-gray-800 text-center justify-center rounded-lg hover:bg-neutral-300 my-2">
          <button className="flex justify-center items-center text-center text-sm">
            Show more
            <MdKeyboardArrowDown className="text-2xl  font-extralight" />
          </button>
        </span>
      </div>
      <div className="mb-8">
        <div className="flex flex-col w-full border-2 gap-1 bg-white rounded-2xl p-2">
          <div className="flex justify-center items-center  gap-3 mt-2">
            <span className="h-12 w-12 bg-green-400 rounded-full">
              <img src="" alt="" />
            </span>
            <button className="w-[85%] h-12 rounded-full  border-2 border-gray-300 text-md flex items-center">
              <span className="p-3 text-gray-600 font-semibold text-sm">
                Start a post, try writing with AI.
              </span>
            </button>
          </div>
          <div className="flex justify-around gap-2">
            <button className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-200">
              <FaRegImage className="text-blue-600 text-lg" />
              <span className="text-sm font-semibold">Media </span>
            </button>
            <button className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-200">
              <FaRegCalendarAlt className="text-yellow-600 text-xl" />
              <span className="text-sm font-semibold">Event</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-200">
              <PiArticleNyTimes className="text-orange-600 text-2xl" />
              <span className="text-sm font-semibold">Write article</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
