"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { TbRefreshAlert } from "react-icons/tb";

const DashboardSideBar = () => {
  const dashboardType = useSearchParams().get("type");
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
        <Link
          href={{
            pathname: "/dashboard",
          }}
        >
          <AiFillHome
            size={26}
            color={dashboardType === null ? "#666666" : "#CCCCCC"}
          />
        </Link>
        <Link
          href={{
            pathname: "/dashboard",
            query: { type: "management" },
          }}
        >
          <FaUser
            size={26}
            color={dashboardType === "management" ? "#666666" : "#CCCCCC"}
          />
        </Link>
        <Link
          href={{
            pathname: "/dashboard",
            query: { type: "emergency" },
          }}
        >
          <TbRefreshAlert
            size={30}
            color={dashboardType === "emergency" ? "#666666" : "#CCCCCC"}
          />
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
