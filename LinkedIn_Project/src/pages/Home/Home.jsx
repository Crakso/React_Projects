import React from "react";
import Header from "../../components/Header/Header";
import { Card, LeftBar, Top, RightBar } from "../../components/index";
function Home() {
  return (
    <>
      {/* grid grid-cols-3 border-4 items-center */}
      <div className="flex justify-center max-md:justify-center w-auto mx-5 mt-6 h-auto">
        <div className="max-md:hidden">
          <LeftBar />
        </div>
        <div className="max-sm:w-[95%] max-md:w-[80%] max-lg:w-[70%] lg:w-[50%] xl:w-[40%]">
          <Top />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="max-lg:hidden ml-10">
          <RightBar />
        </div>
      </div>
    </>
  );
}

export default Home;
