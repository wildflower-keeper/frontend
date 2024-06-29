"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import UserBoardItem from "../UserBoardItem";
import UserBoardHeader from "../../UserBoardHeader";
import { userItemListType } from "..";
import { sleepoverListType } from "../../ManagementContainer";

type UserBoardType = {
  size?: "default" | "large";
  userItemList?: userItemListType;
  sleepoverList?: sleepoverListType;
};

const UserBoard = ({
  size = "default",
  userItemList,
  sleepoverList,
}: UserBoardType) => {
  return (
    <div
      className={`${size === "default" && "w-[460px]"} ${size === "large" && "w-full"}`}
    >
      <UserBoardHeader size={size} />
      {size === "default" &&
        userItemList?.map(({ name, lastLocationStatus, room, phoneNumber }) => {
          return (
            <UserBoardItem
              key={uuidv4()}
              name={name}
              lastLocationStatus={lastLocationStatus}
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
                lastLocationStatus="outting"
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
