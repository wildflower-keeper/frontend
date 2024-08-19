"use client";

import Button from "@/components/base/Button";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { AiOutlineBell, AiOutlineReload } from "react-icons/ai";

const DashboardHeader = () => {
  const dashboardType = useSearchParams().get("type");

  return (
    <div className="px-10 flex justify-between h-20 items-center rounded-br-xl border bg-white">
      <div className="flex items-center gap-7">
        <div className=" w-10 h-10">
          <Image
            src="/assets/logos/wildflower_logo.png"
            alt="아이콘"
            width={40}
            height={40}
          />
        </div>
        <div className="w-[2px] bg-gray-200">&nbsp;</div>
        <div className="flex gap-4">
          <Link
            href={{
              pathname: "/dashboard",
            }}
            className={`${dashboardType ?? "bg-[#F5F5F5]"} rounded-md px-3 py-1`}
          >
            <p className="text-2xl font-bold">홈</p>
          </Link>
        </div>
      </div>
      <div className="flex gap-7">
        <Button className="w-12 h-12 bg border rounded-lg">
          <AiOutlineReload size={24} color="#828282" className="m-auto" />
        </Button>
        <Button className="w-12 h-12 bg border rounded-lg">
          <AiOutlineBell size={26} color="#828282" className="m-auto" />
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
