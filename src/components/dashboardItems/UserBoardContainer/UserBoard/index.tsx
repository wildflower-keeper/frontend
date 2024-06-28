import React from "react";
import UserBoardItem from "../UserBoardItem";
import UserBoardHeader from "../../UserBoardHeader";

type UserBoardType = {
  //  type: "outting" | "inSelter" | "unknown";
  size?: "default" | "large";
};

const temp = [
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
      {temp.map(({ type, idx }) => {
        return <UserBoardItem key={`${idx}${type}`} type={type} size={size} />;
      })}
    </div>
  );
};

export default UserBoard;
