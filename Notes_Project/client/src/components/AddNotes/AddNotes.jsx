import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import TagInput from "../TagInput/TagInput";

function AddNotes({ onClose }) {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const editNote = async () => {};

  const addNewNote = async () => {};

  const handleAddEditNote = () => {
    if (!title) {
      setError("Please enter the title!");
      return;
    }
    if (!content) {
      setError("Please enter the content!");
      return;
    }
    setError("");
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center shadow-xl p-4 mt-2 rounded-2xl bg-green-300 relative">
        <button
          className="flex justify-center items-center absolute top-3 right-3"
          onClick={onClose}
        >
          <MdClose className="hover:bg-red-500 rounded-lg hover:text-white text-slate-700 text-xl" />
        </button>
        {/* <form
          className="flex flex-col justify-center m-2 items-center"
          onSubmit={handleAddEditNote}
        > */}
        <div className="flex flex-col mx-auto mt-4 gap-4">
          <input
            type="text"
            placeholder="title"
            value={title}
            className="outline-none rounded-lg p-2"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            name=""
            placeholder="content"
            className="outline-none rounded-lg p-2"
            rows={6}
            value={content}
            id=""
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <TagInput tags={tags} setTags={setTags} />
        </div>
        {error && <p className="text-red-500 my-2">{error}</p>}
        <button
          className="bg-slate-400 text-white p-2 my-2 rounded-xl hover:bg-slate-500"
          onClick={handleAddEditNote}
        >
          Submit
        </button>
        {/* </form> */}
      </div>
    </>
  );
}

export default AddNotes;
