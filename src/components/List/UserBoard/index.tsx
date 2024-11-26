"use client";

// Compo
import UserBoardItem from "./items/UserBoardItem";
import UserBoardHeader from "./items/UserBoardHeader";
// Utils
import React from "react";
import { v4 as uuidv4 } from "uuid";
// Types
import type {
  UserItemType,
} from "@/api/v1/shelter-admin/type";

const UserBoard = ({ userItemList }: { userItemList: UserItemType[] }) => {
  return (
    <div className="mb-4">
      <UserBoardHeader />
      <div>
        <ul className="flex flex-col gap-4">
          {
            userItemList?.map(
              ({ id, lastLocationStatus, name, phoneNumber, room, emergencyContact, reason, targetDateSleepover, sleepoverStartDate, sleepoverEndDate }, index) => {
                return (
                  <li key={id}>
                    <UserBoardItem
                      index={index + 1}
                      id={id}
                      lastLocationStatus={lastLocationStatus}
                      name={name}
                      room={room}
                      phoneNumber={phoneNumber}
                      targetDateSleepover={targetDateSleepover}
                      reason={reason}
                      emergencyContact={emergencyContact}
                      sleepoverStartDate={sleepoverStartDate}
                      sleepoverEndDate={sleepoverStartDate}
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
