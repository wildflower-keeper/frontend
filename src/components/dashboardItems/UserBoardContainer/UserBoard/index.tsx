import React from "react";
import UserBoardItem from "../UserBoardItem";
import UserBoardHeader from "../../UserBoardHeader";

type UserBoardType = {
  //  type: "outting" | "inSelter" | "unknown";
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

const UserBoard = ({}: UserBoardType) => {
  return (
    <div className=" w-[460px]">
      <UserBoardHeader />
      {temp.map(({ type, idx }) => {
        return <UserBoardItem key={`${idx}${type}`} type={type} />;
      })}
    </div>
  );
};

export default UserBoard;
