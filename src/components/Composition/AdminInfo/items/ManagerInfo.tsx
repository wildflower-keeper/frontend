// Compo
// Utils
import React from "react";
// Types
import type { ChiefOfficerType } from "@/api/v1/shelter-admin/type";

type Props = {
  chiefOfficer?: ChiefOfficerType;
};

const ManagerInfo = ({ chiefOfficer }: Props) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex gap-2 justify-start font-semibold">
        {chiefOfficer ? (
            <span>{chiefOfficer.name}</span>
        ) : (
          <span className="text-fontWeak">책임자가 지정되어있지 않습니다.</span>
        )}
      </div>
    </div>
  );
};

export default ManagerInfo;
