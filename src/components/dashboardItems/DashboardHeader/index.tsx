"use client";

import Button from "@/components/base/Button";
import useDashboardStore from "@/store/useDashboard";
import React from "react";
import { AiOutlineBell, AiOutlineReload } from "react-icons/ai";

const headerName = {
  dashboard: "대시보드",
  management: "외박 신청 내역",
};

const DashboardHeader = () => {
  const { dashboard } = useDashboardStore();
  return (
    <div className="px-10 flex justify-between h-20 items-center rounded-br-xl border bg-white">
      <p className="text-2xl font-bold">{headerName[dashboard]}</p>
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
