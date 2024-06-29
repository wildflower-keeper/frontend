"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import UserBoardItem from "../UserBoardItem";
import UserBoardHeader from "../../UserBoardHeader";

export type sleepoverItemType = {
  sleepoverId: number;
  homelessId: number;
  homelessName: string;
  homelessPhoneNumber: string;
  startDate: string;
  endDate: string;
  createdAt: string;
};

export type userItemType = {
  id: number;
  name: string;
  room: string;
  birthDate: string;
  targetDateSleepover: boolean;
  lastLocationStatus: "OUTING" | "IN_SHELTER" | null;
  lastLocationTrackedAt: string;
  phoneNumber: string;
  admissionDate: string;
};

type UserBoardType = {
  size?: "default" | "large";
  userItemList?: userItemType[];
  sleepoverList?: sleepoverItemType[];
};

const UserBoard = ({
  size = "default",
  userItemList,
  sleepoverList,
}: UserBoardType) => {
  return (
    <div
      className={`${size === "default" && "w-[500px]"} ${size === "large" && "w-full"}`}
    >
      <UserBoardHeader size={size} />
      {size === "default" &&
        userItemList?.map(({ name, lastLocationStatus, room, phoneNumber }) => {
          return (
            <UserBoardItem
              key={uuidv4()}
              name={name}
              lastLocationStatus={lastLocationStatus ?? "UNKNOWN"}
              size={size}
              room={room}
              phoneNumber={phoneNumber}
            />
          );
        })}
      {size === "large" &&
        sleepoverList?.map(
          ({ homelessName, homelessPhoneNumber, startDate, endDate }) => {
            return (
              <UserBoardItem
                key={uuidv4()}
                name={homelessName}
                lastLocationStatus="OUTING"
                size={size}
                room="101"
                phoneNumber={homelessPhoneNumber}
                startDate={startDate}
                endDate={endDate}
              />
            );
          },
        )}
    </div>
  );
};

export default UserBoard;
