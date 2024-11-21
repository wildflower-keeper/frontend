// Compo
// Utils
import React from "react";
import { LAST_LOCATION_STATUS } from "./index.const";
// Types
import type {
  LocationStatusType,
} from "@/api/v1/shelter-admin/type";

const StatusBadge = ({ lastLocationStatus }: {lastLocationStatus?: LocationStatusType}) => {
  return (
    <>
      {lastLocationStatus && (
        <div
          className={`flex mx-auto text-sm rounded-3xl px-2 w-[74px] py-1 font-semibold ${LAST_LOCATION_STATUS.CLASSNAME[lastLocationStatus]}`}
        >
          <p className="w-fit text-center mx-auto">
            {LAST_LOCATION_STATUS.STATUS[lastLocationStatus]}
          </p>
        </div>
      )}
    </>
  );
};

export default StatusBadge;
