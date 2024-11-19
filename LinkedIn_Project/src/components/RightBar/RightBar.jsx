import React from "react";

function RightBar() {
  return (
    <>
      <div className="bg-white rounded-xl p-4 h-auto">
        <div>
          <h2 className="font-semibold text-lg">Trending Now</h2>
          <span className="text-gray-500 font-semibold">
            curented by LinkedIn News
          </span>
          <div className="flex flex-col gap-2 my-2">
            <span>
              <h4 className="font-semibold">Semiconductor industry</h4>
              <p className="text-xs">2d ago</p>
            </span>
            <span>
              <h4 className="font-semibold">COP29</h4>
              <p className="text-xs">3d ago</p>
            </span>
            <span>
              <h4 className="font-semibold">Indian banks</h4>
              <p className="text-xs">2d ago</p>
            </span>
            <span>
              <h4 className="font-semibold">Retail inflation</h4>
              <p className="text-xs">2d ago</p>
            </span>
            <span>
              <h4 className="font-semibold">Patent applications in India</h4>
              <p className="text-xs">2d ago</p>
            </span>
          </div>
          <span className="font-semibold"> show more</span>
        </div>
        <div className="flex flex-col gap-2 font-semibold text-md mt-4">
          <h2 className="text-gray-500">Today's puzzles</h2>
          <span>Tango</span>
          <span>Queens</span>
          <span>Pinpoint</span>
          <span>Crossclimb</span>
        </div>
      </div>
      <div className="bg-white rounded-xl p-3 mt-2">
        <p>Try LinkedIn on the Windows App</p>
      </div>
      <div className="copyright text-xs mt-4">LinkedIn Corporation © 2024</div>
    </>
  );
}

export default RightBar;
