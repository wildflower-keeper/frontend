import formatPhoneNumber from "@/utils/common";
import React from "react";
//Types
import type {
  ChiefOfficerType,
  DutyOfficerType,
} from "@/api/v1/shelter-admin/type";

type Props = {
  chiefOfficer?: ChiefOfficerType;
  dutyOfficer?: DutyOfficerType;
};

const ManagerInfo = ({ chiefOfficer, dutyOfficer }: Props) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex gap-2 min-w-64 justify-start">
        <span className="font-semibold">책임자</span>
        {chiefOfficer ? (
          <>
            <span>{chiefOfficer.name}</span>
            <span className="text-fontWeak">
              {formatPhoneNumber(chiefOfficer.phoneNumber)}
            </span>
          </>
        ) : (
          <span className="text-fontWeak">책임자가 지정되어있지 않습니다.</span>
        )}
      </div>
      <div className="flex gap-2 min-w-64 justify-start">
        <span className="font-semibold">당직자</span>
        {dutyOfficer ? (
          <>
            <span>{dutyOfficer.name}</span>
            <span className="text-fontWeak">
              {formatPhoneNumber(dutyOfficer.phoneNumber)}
            </span>
          </>
        ) : (
          <span className="text-fontWeak">오늘은 당직자가 없습니다.</span>
        )}
      </div>
    </div>
  );
};

export default ManagerInfo;
