import React, { useState } from "react";

function Card({ FrindProfile = "", Profile = "" }) {
  const [data, setData] = useState({ name: "Akki", desc: "C|C++|DSA" });
  const [follow, setFollow] = useState(false);
  return (
    <div className="bg-white rounded-xl  h-auto  mt-2 py-2">
      <div className="flex gap-1 text-xs px-3 items-center">
        <div className="h-6 w-6 bg-gray-400 rounded-full flex items-center justify-center">
          {FrindProfile ? <img src="" alt="" /> : <p>DP</p>}
        </div>
        <span className="font-semibold">Harish Negi</span>
        <p className="text-gray-600"> like this</p>
      </div>
      <div className="w-full flex justify-center items-center my-2">
        <p className="border-[1px] w-[95%] border-gray-200  "></p>
      </div>
      <div className="flex flex-col w-full justify-around items-center">
        <div className="info w-full px-5 flex flex-row justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-slate-400 flex justify-center items-center">
              {Profile ? <img src="" alt="" /> : <p>DP</p>}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-md">{data.name}</span>
              <span className="text-xs text-gray-500">{data.desc}</span>
              <span className="text-xs text-gray-500">2d ago</span>
            </div>
          </div>
          <button
            className={` font-bold hover:bg-blue-50 rounded-md p-2 ${
              follow ? "text-gray-700" : "text-blue-500"
            }`}
            onClick={() => setFollow(!follow)}
          >
            {follow ? "🗸 following" : "+ Follow"}
          </button>
        </div>
        <div className="post h-auto w-[90%] my-2">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eligendi quidem tenetur, tempora nisi aliquid cupiditate soluta
            obcaecati reiciendis beatae, optio modi, error vitae nihil officia
            quos fugit harum odio.
          </span>
          <div className="h-auto w-full mt-2">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="bottom-button flex justify-between w-[90%] px-2 font-semibold">
          <button>Like</button>
          <button>Comment</button>
          <button>Repost</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
