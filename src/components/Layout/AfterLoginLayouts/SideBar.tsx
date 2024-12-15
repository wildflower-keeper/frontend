"use client";

// Compo
import Image from "next/image";

// Utils
import React from "react";
import PinNumber from "./items/PinNumber";
import PageList from "./items/PageList";
import ExtraPageList from "./items/ExtraPageList";


const AfterLoginSideBar = () => {
  return (
    <div className="flex flex-col h-min-full bg-white py-5 w-[250px] flex-shrink-0 border-r border-solid border-gray-200">
      <div className=" w-40 h-10 mx-auto">
        <Image
          src="/assets/logos/wildflower_logo_with_name.png"
          alt="아이콘"
          width={300}
          height={300}
        />
      </div>
      <PageList />
      <div className="flex justify-center w-full">
      <PinNumber />
      </div>
      <ExtraPageList />
    </div>
  );
};

export default AfterLoginSideBar;
