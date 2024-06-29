import React from "react";
import { chiefOfficersType, dutyOfficersType } from "..";

type ManagerInfoType = {
  chiefOfficers: chiefOfficersType;
  dutyOfficers: dutyOfficersType;
};

const ManagerInfo = ({ chiefOfficers, dutyOfficers }: ManagerInfoType) => {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex gap-2">
        <span className="font-semibold">책임자</span>
        <span>{chiefOfficers.name}</span>
        <span className="text-fontWeak">{chiefOfficers.phoneNumber}</span>
      </div>
      <div className="flex gap-2">
        <span className="font-semibold">당직자</span>
        <span>{dutyOfficers.name}</span>
        <span className="text-fontWeak">{dutyOfficers.phoneNumber}</span>
      </div>
    </div>
  );
};

export default ManagerInfo;
