import React from "react";

type UserBoardHeaderType = {
  size: "default" | "large";
};

const UserBoardHeader = ({ size }: UserBoardHeaderType) => {
  return (
    <div
      className={`px-7 py-3 grid ${size === "default" && "grid-cols-5"} ${size === "large" && "grid-cols-7"}`}
    >
      {size === "default" && (
        <div className="h-fit my-auto text-center">상태</div>
      )}
      <div className="h-fit my-auto text-center">이름</div>
      <div className="h-fit my-auto text-center">호실</div>
      <div
        className={`h-fit my-auto text-center ${size === "default" && "col-span-2"}`}
      >
        전화번호
      </div>
      {size === "large" && (
        <>
          <div className="h-fit my-auto text-center col-span-2">외박기간</div>
          <div className="h-fit my-auto text-center">외박사유</div>
          <div className="h-fit my-auto text-center">비상연락망</div>
        </>
      )}
    </div>
  );
};

export default UserBoardHeader;
