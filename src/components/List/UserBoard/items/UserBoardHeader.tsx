import { useUserContext } from "@/components/Layout/UserManagementProvider";
import React from "react";

const UserBoardHeader = () => {
  const userContext = useUserContext();
  const { isOpenDeleteUser } = userContext;

  const userDataTypeList = [
    "NO.",
    isOpenDeleteUser ? "체크" : "상태",
    "이름",
    "호실",
    "전화번호",
    "외박기간",
    "외박사유",
    "비상연락망"
  ]
  return (
    <div className="py-3 grid grid-cols-8 bg-neutral-100 rounded-md font-bold">
      {userDataTypeList.map((type, index) => (
        <div key={index} className="h-fit my-auto text-center">{type}</div>
      ))}
    </div>
  );
};

export default UserBoardHeader;
