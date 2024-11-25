import React from "react";

const userDataTypeList = [
  "NO.",
  "상태",
  "이름",
  "호실",
  "전화번호",
  "외박기간",
  "외박사유",
  "비상연락망"
]

const UserBoardHeader = () => {
  return (
    <div className="py-3 grid grid-cols-8 bg-neutral-100 rounded-md font-bold">
      {userDataTypeList.map((type, index) => (
        <div key={index} className="basicRowStyle">{type}</div>
      ))}
    </div>
  );
};

export default UserBoardHeader;
