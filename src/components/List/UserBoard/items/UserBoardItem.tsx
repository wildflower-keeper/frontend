// Compo
import StatusBadgeOrCheckbox from "./StatusBadgeOrCheckbox";
// Utils
import React, { useContext, useState } from "react";
import formatPhoneNumber from "@/utils/string/phone";
// Types
import type {
  UserBoardItemType,
} from "@/api/v1/shelter-admin/type";
const UserBoardItem = ({
  index,
  id,
  lastLocationStatus,
  name,
  phoneNumber,
  room,
  secondPhoneNumber,
  sleepoverReason,
  targetDateSleepover
}: UserBoardItemType) => {
  const baseStyle = "h-fit my-auto text-center"
  return (
    <div className="  py-3 bg-white grid grid-cols-8 place-items-cente text-sm border-b border-solid border-neutral-200">
      <div className={baseStyle}>{index}</div>
      <div className={baseStyle}>
        <StatusBadgeOrCheckbox id={id} lastLocationStatus={lastLocationStatus} />
      </div>
      <div className={`${baseStyle} truncate`}>{name}</div>
      <div className={`${baseStyle} truncate`}>{room}</div>
      <div className={`${baseStyle} min-w-[102px]`}>{formatPhoneNumber(phoneNumber)}</div>
      <div className={baseStyle}>{targetDateSleepover}</div>
      <div className={baseStyle}>{sleepoverReason}</div>
      <div className={baseStyle}>{secondPhoneNumber}</div>
    </div>
  );
};

export default UserBoardItem;
