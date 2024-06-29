import React from "react";
import { GoDotFill } from "react-icons/go";

type StatusBadgeType = {
  type: "outting" | "inSelter" | "unknown";
};

const statusColor = {
  outting: "#FFC200",
  unknown: "#D9D9D9",
  inSelter: "#00B226",
} as const;

const status = {
  outting: "외출",
  unknown: "미확인",
  inSelter: "재실",
};

const statusClassName = {
  outting: "bg-[#FFC200]/10 text-[#FFC200] border-[#FFC200]",
  unknown: "bg-[#D9D9D9]/10 text-[#D9D9D9] border-[#D9D9D9]",
  inSelter: "bg-[#00B226]/10 text-[#00B226] border-[#00B226]",
};

const StatusBadge = ({ type }: StatusBadgeType) => {
  return (
    <div
      className={`flex mx-auto text-sm rounded-3xl px-2 w-[74px] py-1 border font-semibold border-solid ${statusClassName[type]}`}
    >
      <GoDotFill size={18} color={statusColor[type]} className="my-auto" />
      <p className="w-fit text-center mx-auto">{status[type]}</p>
    </div>
  );
};

export default StatusBadge;
