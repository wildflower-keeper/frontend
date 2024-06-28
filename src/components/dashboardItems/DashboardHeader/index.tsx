import Button from "@/components/base/Button";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="px-10 flex justify-between h-20 items-center rounded-br-xl border bg-white">
      <p className="text-2xl font-bold">대시보드</p>
      <div className="flex gap-7">
        <Button className="w-12 h-12 bg border rounded-lg">1</Button>
        <Button className="w-12 h-12 bg border rounded-lg">2</Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
