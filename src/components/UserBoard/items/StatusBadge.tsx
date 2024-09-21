import React from "react";
import { GoDotFill } from "react-icons/go";

const lastLocationStatusColor = {
  OUTING: "#FFC200",
  UNKNOWN: "#D9D9D9",
  IN_SHELTER: "#00B226",
} as const;

const lastLocationStatusConstant = {
  OUTING: "외출",
  UNKNOWN: "미확인",
  IN_SHELTER: "재실",
};

const lastLocationStatusClassName = {
  OUTING: "bg-[#FFC200]/10 text-[#FFC200] border-[#FFC200]",
  UNKNOWN: "bg-[#D9D9D9]/10 text-[#D9D9D9] border-[#D9D9D9]",
  IN_SHELTER: "bg-[#00B226]/10 text-[#00B226] border-[#00B226]",
};

const sleepoverSituationColor = {
  SCHEDULED: "#FFC200",
  CLOSED: "#D9D9D9",
  ONGOING: "#00B226",
};

const sleepoverSituationConstant = {
  SCHEDULED: "외박 예정",
  CLOSED: "지난 외박",
  ONGOING: "오늘 외박",
};

const sleepoverSituationClassName = {
  SCHEDULED: "bg-[#FFC200]/10 text-[#FFC200] border-[#FFC200]",
  CLOSED: "bg-[#D9D9D9]/10 text-[#D9D9D9] border-[#D9D9D9]",
  ONGOING: "bg-[#00B226]/10 text-[#00B226] border-[#00B226]",
};

interface Props {
  lastLocationStatus?: "OUTING" | "IN_SHELTER" | "UNKNOWN";
  sleepoverSituation?: "SCHEDULED" | "ONGOING" | "CLOSED";
}

const StatusBadge = ({ lastLocationStatus, sleepoverSituation }: Props) => {
  return (
    <>
      {lastLocationStatus && (
        <div
          className={`flex mx-auto text-sm rounded-3xl px-2 w-[74px] py-1 border font-semibold border-solid ${lastLocationStatusClassName[lastLocationStatus]}`}
        >
          <GoDotFill
            size={18}
            color={lastLocationStatusColor[lastLocationStatus]}
            className="my-auto"
          />
          <p className="w-fit text-center mx-auto">
            {lastLocationStatusConstant[lastLocationStatus]}
          </p>
        </div>
      )}
      {sleepoverSituation && (
        <div
          className={`flex mx-auto text-sm rounded-3xl px-2 w-24 py-1 border font-semibold border-solid ${sleepoverSituationClassName[sleepoverSituation]}`}
        >
          <GoDotFill
            size={18}
            color={sleepoverSituationColor[sleepoverSituation]}
            className="my-auto"
          />
          <p className="w-fit text-center mx-auto">
            {sleepoverSituationConstant[sleepoverSituation]}
          </p>
        </div>
      )}
    </>
  );
};

export default StatusBadge;
