import React from "react";

const UserBoardHeader = () => {
  return (
    <div className=" rounded-2xl px-7 py-3 grid grid-cols-5">
      <div className="h-fit my-auto text-center">상태</div>
      <div className="h-fit my-auto text-center">이름</div>
      <div className="h-fit my-auto text-center">호실</div>
      <div className="h-fit my-auto col-span-2 text-center">전화번호</div>
    </div>
  );
};

export default UserBoardHeader;
