import React from "react";
import StatusBadge from "../StatusBadge";

type UserBoardItemType = {
  type: "outting" | "inSelter" | "unknown";
  size: "default" | "large";
};

const UserBoardItem = ({ type, size }: UserBoardItemType) => {
  return (
    <div
      className={`rounded-2xl px-7 py-3 bg-white mb-3 grid ${size === "default" && "grid-cols-5"} ${size === "large" && "grid-cols-8"}`}
    >
      <StatusBadge type={type} />
      <div className="h-fit my-auto text-center">이름이</div>
      <div className="h-fit my-auto text-center">101</div>
      <div
        className={`h-fit my-auto text-center ${size === "default" && "col-span-2"}`}
      >
        010-2222-4444
      </div>
      {size === "large" && (
        <>
          <div className="h-fit my-auto text-center col-span-2">
            2024.05.17 ~ 2024.05.24
          </div>
          <div className="h-fit my-auto text-center">모임</div>
          <div className="h-fit my-auto text-center">010-8888-4444</div>
        </>
      )}
    </div>
  );
};

export default UserBoardItem;
