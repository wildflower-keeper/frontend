// Compo
import { GoDotFill } from "react-icons/go";
// Utils
import React from "react";
import { LAST_LOCATION_STATUS, SLEEPOVER_SITUATION } from "./index.const";
// Types
import type {
  LocationStatusType,
  SleepoverSituation,
} from "@/api/v1/shelter-admin/type";

interface Props {
  lastLocationStatus?: LocationStatusType;
  sleepoverSituation?: SleepoverSituation;
}

const StatusBadge = ({ lastLocationStatus, sleepoverSituation }: Props) => {
  return (
    <>
      {lastLocationStatus && (
        <div
          className={`flex mx-auto text-sm rounded-3xl px-2 w-[74px] py-1 border font-semibold border-solid ${LAST_LOCATION_STATUS.CLASSNAME[lastLocationStatus]}`}
        >
          <GoDotFill
            size={18}
            color={LAST_LOCATION_STATUS.COLOR[lastLocationStatus]}
            className="my-auto"
          />
          <p className="w-fit text-center mx-auto">
            {LAST_LOCATION_STATUS.STATUS[lastLocationStatus]}
          </p>
        </div>
      )}
      {sleepoverSituation && (
        <div
          className={`flex mx-auto text-sm rounded-3xl px-2 w-24 py-1 border font-semibold border-solid ${SLEEPOVER_SITUATION.CLASS_NAME[sleepoverSituation]}`}
        >
          <GoDotFill
            size={18}
            color={SLEEPOVER_SITUATION.COLOR[sleepoverSituation]}
            className="my-auto"
          />
          <p className="w-fit text-center mx-auto">
            {SLEEPOVER_SITUATION.STATUS[sleepoverSituation]}
          </p>
        </div>
      )}
    </>
  );
};

export default StatusBadge;
