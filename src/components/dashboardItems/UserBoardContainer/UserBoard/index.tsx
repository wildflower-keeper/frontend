import React from "react";
import { v4 as uuidv4 } from "uuid";
import UserBoardItem from "../UserBoardItem";
import UserBoardHeader from "../../UserBoardHeader";

type UserBoardType = {
  //  type: "outting" | "inSelter" | "unknown";
  size?: "default" | "large";
};

type tempItemType = {
  type: "outting" | "inSelter" | "unknown";
};

const temp: tempItemType[] = [
  {
    type: "outting",
  },
  { type: "inSelter" },
  { type: "unknown" },
  {
    type: "outting",
  },
  { type: "inSelter" },
  { type: "unknown" },
  {
    type: "outting",
  },
];

const UserBoard = ({ size = "default" }: UserBoardType) => {
  return (
    <div
      className={`${size === "default" && "w-[460px]"} ${size === "large" && "w-full"}`}
    >
      <UserBoardHeader size={size} />
      {temp.map(({ type }) => {
        return <UserBoardItem key={uuidv4()} type={type} size={size} />;
      })}
    </div>
  );
};

export default UserBoard;
