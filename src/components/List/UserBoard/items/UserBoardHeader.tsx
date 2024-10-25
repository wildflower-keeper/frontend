import userDeleteManagementStore from "@/store/useUserDeleteManagement";
import React from "react";

type Props = {
  size: "default" | "large";
};

const UserBoardHeader = ({ size }: Props) => {
  const {isOpenDeleteUser} = userDeleteManagementStore();
  return (
    <div
      className={` py-3 grid px-7 ${size === "default" && "grid-cols-5"} ${size === "large" && "grid-cols-8"}`}
    >
      {isOpenDeleteUser ? <div className="h-fit my-auto text-center">체크</div> : <div className="h-fit my-auto text-center">상태</div>}

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
