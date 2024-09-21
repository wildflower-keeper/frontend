"use client";

// Compo
import UserBoardItem from "./items/UserBoardItem";
import UserBoardHeader from "./items/UserBoardHeader";
// Utils
import React from "react";
import { v4 as uuidv4 } from "uuid";
// Types
import type {
  AddSituationSleepoverType,
  UserItemType,
} from "@/api/v1/shelter-admin/type";

type Props = {
  size?: "default" | "large";
  userItemList?: UserItemType[];
  sleepoverList?: AddSituationSleepoverType[];
};

const UserBoard = ({
  size = "default",
  userItemList,
  sleepoverList,
}: Props) => {
  return (
    <div
      className={` ${size === "default" && "w-[560px]"} ${size === "large" && "w-full"}`}
    >
      <UserBoardHeader size={size} />
      <div>
        <ul className="flex flex-col gap-4 h-[420px]">
          {size === "default" &&
            userItemList?.map(
              ({ name, lastLocationStatus, room, phoneNumber }) => {
                return (
                  <li key={uuidv4()}>
                    <UserBoardItem
                      name={name}
                      lastLocationStatus={lastLocationStatus ?? "UNKNOWN"}
                      size={size}
                      room={room}
                      phoneNumber={phoneNumber}
                    />
                  </li>
                );
              },
            )}
          {size === "large" &&
            sleepoverList?.map(
              ({
                homelessName,
                homelessPhoneNumber,
                homelessRoom,
                emergencyContact,
                reason,
                startDate,
                endDate,
                sleepoverSituation,
              }) => {
                return (
                  <li key={uuidv4()}>
                    <UserBoardItem
                      sleepoverSituation={sleepoverSituation}
                      name={homelessName}
                      size={size}
                      room={homelessRoom}
                      phoneNumber={homelessPhoneNumber}
                      startDate={startDate}
                      reason={reason}
                      endDate={endDate}
                      emergencyContact={emergencyContact}
                    />
                  </li>
                );
              },
            )}
        </ul>
      </div>
    </div>
  );
};

export default UserBoard;
