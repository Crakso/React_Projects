import React, { useState } from "react";
import { MdClose } from "react-icons/md";

function TagInput({ tags, setTags }) {
  const [inputTag, setInputTags] = useState("");

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const HandleAddMultipleTags = (e) => {
    if (e.key == "Enter") {
      addTags();
    }
  };

  const addTags = () => {
    if (inputTag !== "") {
      setTags([...tags, inputTag]);
      setInputTags("");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className="m-1 text-slate-600 bg-slate-200 flex items-center justify-between"
              >
                #{tag}
                <MdClose
                  className="mx-1 cursor-pointer"
                  onClick={() => handleTagRemove(tag)}
                />
              </span>
            ))}
        </div>
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="#tags"
            value={inputTag}
            className="outline-none rounded-lg p-2"
            onChange={(e) => {
              setInputTags(e.target.value);
            }}
            onKeyDown={HandleAddMultipleTags}
          />
          <button
            className="px-3 py-1 mx-2 rounded-lg w- text-2xl bg-slate-400 text-white"
            onClick={addTags}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default TagInput;
