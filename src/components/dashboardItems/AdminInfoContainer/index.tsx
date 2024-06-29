import React from "react";
import DateInfo from "./DateInfo";
import ManagerInfo from "./ManagerInfo";
import PinNumberInfo from "./PinNumberInfo";

const AdminInfoContainer = () => {
  return (
    <div className="w-full flex justify-between">
      <DateInfo />
      <div className="flex items-center rounded-lg border border-dashed border-[#CCCCCC] px-5 py-4 gap-10">
        <PinNumberInfo />
        <ManagerInfo />
      </div>
    </div>
  );
};

export default AdminInfoContainer;
