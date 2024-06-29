import React from "react";
import formatPhoneNumber from "@/utils/common";
import StatusBadge from "../StatusBadge";

type UserBoardItemType = {
  name: string;
  lastLocationStatus: "outting" | "IN_SHELTER" | "unknown";
  room: string;
  phoneNumber: string;
  size: "default" | "large";
  startDate?: string;
  endDate?: string;
};

const UserBoardItem = ({
  name,
  size,
  lastLocationStatus,
  room,
  phoneNumber,
  startDate,
  endDate,
}: UserBoardItemType) => {
  return (
    <div
      className={`rounded-2xl px-7 py-3 bg-white mb-3 grid ${size === "default" && "grid-cols-5"} ${size === "large" && "grid-cols-8"}`}
    >
      <StatusBadge type={lastLocationStatus} />
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
          <div className="h-fit my-auto text-center">모임</div>
          <div className="h-fit my-auto text-center">010-8888-4444</div>
        </>
      )}
    </div>
  );
};

export default UserBoardItem;
