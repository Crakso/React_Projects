import React from "react";
import Header from "../../components/Header/Header";
import { Top } from "../../components/index";
function Home() {
  return (
    <>
      {/* grid grid-cols-3 border-4 items-center */}
      <div className="flex justify-between max-lg:justify-center w-auto mx-5 mt-6 h-auto">
        <div className="max-lg:hidden">leftbar</div>
        <div className="max-lg:w-[80%] lg:w-[40%]">
          <Top />
        </div>
        <div className="max-lg:hidden">rightbar</div>
      </div>
    </>
  );
}

export default Home;
