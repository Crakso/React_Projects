import React, { useState } from "react";
import {
  MdCreate,
  MdDelete,
  MdOutlineDelete,
  MdOutlineEdit,
  MdOutlinePushPin,
} from "react-icons/md";

function NoteCards({
  HandleDelete,
  title,
  tags,
  isPinned,
  date,
  content,
  HandleEdit,
}) {
  // const [isPin, setIsPin] = useState(false);

  return (
    <div className="bg-slate-200 rounded-lg p-2 flex flex-col hover:shadow-xl transition-all ease-in-out">
      <div className="flex justify-between">
        <h2 className="font-bold text-lg mt-2">{title}</h2>
        <div className={`${isPinned ? "text-blue-500" : "text-slate-400"}`}>
          <MdOutlinePushPin
            className="cursor-pointer text-xl"
            onClick={() => setIsPinned(!isPinned)}
          />
        </div>
      </div>
      <span className="text-green-700 text-lg my-2">{date}</span>
      <p>{content}</p>

      <div className="flex justify-between items-center mt-2">
        <div className="text-xs text-slate-600">{tags}</div>
        <div className="flex flex-row mx-2 gap-2">
          <MdOutlineEdit
            className="cursor-pointer hover:text-green-600"
            onClick={HandleEdit}
          />
          <MdOutlineDelete
            className="cursor-pointer hover:text-green-600"
            onClick={HandleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default NoteCards;
