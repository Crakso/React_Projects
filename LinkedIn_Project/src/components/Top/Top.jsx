import React from "react";
import { FaRegImage } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiArticleNyTimes } from "react-icons/pi";

function Top() {
  return (
    <>
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
    </>
  );
}

export default Top;
