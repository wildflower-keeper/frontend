import React from "react";
import formatPhoneNumber from "@/utils/common";
import StatusBadge from "../StatusBadge";

type UserBoardItemType = {
  name: string;
  lastLocationStatus?: "OUTING" | "IN_SHELTER" | "UNKNOWN";
  room: string;
  phoneNumber: string;
  size: "default" | "large";
  startDate?: string;
  endDate?: string;
  reason?: string;
  emergencyContact?: string;
};

const UserBoardItem = ({
  name,
  size,
  lastLocationStatus,
  room,
  phoneNumber,
  startDate,
  endDate,
  reason,
  emergencyContact,
}: UserBoardItemType) => {
  return (
    <div
      className={`rounded-2xl  py-3 bg-white grid ${size === "default" && "grid-cols-5 px-7"} ${size === "large" && "grid-cols-7 pr-7"}`}
    >
      {size === "default" && lastLocationStatus && (
        <StatusBadge type={lastLocationStatus} />
      )}
      <div className="h-fit my-auto text-center">{name}</div>
      <div className="h-fit my-auto text-center">{room}</div>
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
