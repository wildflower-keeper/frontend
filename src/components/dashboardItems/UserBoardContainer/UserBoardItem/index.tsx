import React from "react";
import StatusBadge from "../StatusBadge";

type UserBoardItemType = {
  type: "outting" | "inSelter" | "unknown";
};

const UserBoardItem = ({ type }: UserBoardItemType) => {
  return (
    <div className=" rounded-2xl px-7 py-3 bg-white mb-3 grid grid-cols-5">
      <StatusBadge type={type} />
      <div className="h-fit my-auto text-center">이름이</div>
      <div className="h-fit my-auto text-center">101</div>
      <div className="h-fit my-auto col-span-2 text-center">010-2222-4444</div>
    </div>
  );
};

export default UserBoardItem;
