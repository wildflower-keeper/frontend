// Compo
import StatusBadge from "./StatusBadge";
// Utils
import React, { useContext, useState } from "react";
import formatPhoneNumber from "@/utils/string/phone";
// Types
import type {
  LocationStatusType,
  SleepoverSituation,
} from "@/api/v1/shelter-admin/type";
import Checkbox from '@mui/material/Checkbox';
import { userManagementContext } from "@/components/Layout/UserManagementProvider";
import StatusControllerOpenToggle from "./StatusControllerOpenToggle";
import StatusBadgeOrCheckbox from "./StatusBadgeOrCheckBox";

type Props = {
  id: number
  name: string;
  lastLocationStatus?: LocationStatusType;
  sleepoverSituation?: SleepoverSituation;
  room: string;
  phoneNumber: string;
  size: "default" | "large";
  startDate?: string;
  endDate?: string;
  reason?: string;
  emergencyContact?: string;
};

const UserBoardItem = ({
  id,
  name,
  size,
  lastLocationStatus,
  sleepoverSituation,
  room,
  phoneNumber,
  startDate,
  endDate,
  reason,
  emergencyContact,
}: Props) => {
  return (
    <div
      className={`rounded-2xl  py-3 bg-white grid px-7 ${size === "default" && "grid-cols-5"} ${size === "large" && "grid-cols-8"}`}
    >
      <StatusBadgeOrCheckbox id={id} lastLocationStatus={lastLocationStatus} sleepoverSituation={sleepoverSituation} />

      <div className="h-fit my-auto text-center truncate">{name}</div>
      <div className="h-fit my-auto text-center truncate">{room}</div>
      <div
        className={`h-fit my-auto text-center ${size === "default" && "col-span-2"}`}
      >
        {formatPhoneNumber(phoneNumber)}
      </div>
      {size === "large" && (
        <>
          <div className="h-fit my-auto text-center col-span-2">
            {`${startDate?.split("-").join(".")} ~ ${endDate?.split("-").join(".")}`}{" "}
          </div>
          <div className="h-fit my-auto text-center">{reason}</div>
          <div className="h-fit my-auto text-center">
            {emergencyContact && formatPhoneNumber(emergencyContact)}
          </div>
        </>
      )}
    </div>
  );
};

export default UserBoardItem;
