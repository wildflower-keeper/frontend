"use client";

import Button from "@/components/base/Button";
import useDashboardStore from "@/store/useDashboard";
import Image from "next/image";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { TbRefreshAlert } from "react-icons/tb";

const DashboardSideBar = () => {
  const { dashboard, setDashboard } = useDashboardStore();

  return (
    <div className="flex flex-col h-min-full bg-white pt-5 w-24">
      <div className=" w-10 h-10 mx-auto">
        <Image
          src="/assets/logos/wildflower_logo.png"
          alt="아이콘"
          width={40}
          height={40}
        />
      </div>
      <div className="grow flex flex-col justify-center items-center gap-8">
        <Button>
          <AiFillHome
            size={26}
            color={dashboard === "dashboard" ? "#666666" : "#CCCCCC"}
            onClick={() => {
              setDashboard("dashboard");
            }}
          />
        </Button>
        <Button>
          <FaUser
            size={26}
            color={dashboard === "management" ? "#666666" : "#CCCCCC"}
            onClick={() => {
              setDashboard("management");
            }}
          />
        </Button>
        <Button>
          <TbRefreshAlert
            size={30}
            color={dashboard === "emergency" ? "#666666" : "#CCCCCC"}
            onClick={() => {
              setDashboard("emergency");
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default DashboardSideBar;
