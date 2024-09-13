"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import UserBoardItem from "../UserBoardItem";
import UserBoardHeader from "../../UserBoardHeader";
//Types
import type { UserItemType } from "@/utils/api/v1/shelter-admin/type";

export type sleepoverItemType = {
  sleepoverId: number;
  homelessId: number;
  homelessName: string;
  homelessPhoneNumber: string;
  homelessRoom: string;
  emergencyContact: string;
  reason: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  sleepoverSituation: "SCHEDULED" | "ONGOING" | "CLOSED";
};

type UserBoardType = {
  size?: "default" | "large";
  userItemList?: UserItemType[];
  sleepoverList?: sleepoverItemType[];
};

const UserBoard = ({
  size = "default",
  userItemList,
  sleepoverList,
}: UserBoardType) => {
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
