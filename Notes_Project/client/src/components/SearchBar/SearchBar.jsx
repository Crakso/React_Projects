import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function SearchBar() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {}, []);

  const onClearSearch = () => {
    setValue("");
  };

  return (
    <div className="bg-slate-100 w-2/5 sm:w-60 md:w-80 flex items-center justify-between px-2 rounded-lg">
      <input
        type="text"
        placeholder="Search Notes.."
        className="p-1 bg-transparent outline-none"
        value={value}
        onChange={onChange}
      />

      {/* <button className="w-7 h-7 ml-2">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/504/972/small/search-icon-free-vector.jpg"
          alt="button"
          className="pt-1"
        />
      </button> */}

      {value && (
        <IoMdClose
          className="text-gray-400 hover:text-black cursor-pointer text-xl mr-1"
          onClick={onClearSearch}
        />
      )}
      <FaMagnifyingGlass
        className="text-gray-400 hover:text-black cursor-pointer"
        // onClick={HandleSearch}
      />
    </div>
  );
}

export default SearchBar;
