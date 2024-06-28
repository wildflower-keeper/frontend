import Image from "next/image";
import React from "react";

const DashboardSideBar = () => {
  return (
    <div className="flex-col h-min-full bg-white pt-5 w-24">
      <div className=" w-10 h-10 mx-auto">
        <Image
          src="/assets/logos/wildflower_logo.png"
          alt="아이콘"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default DashboardSideBar;
