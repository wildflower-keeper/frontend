import React from "react";

const UserBoardHeader = () => {
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
  return (
    <div className="py-3 grid grid-cols-8 bg-neutral-100 rounded-md font-bold"
      style={{
        gridTemplateColumns: "1fr 1fr 1fr 1fr 2fr 2fr 2fr 2fr"
      }}>
      {userDataTypeList.map((type, index) => (
        <div key={index} className="h-fit my-auto text-center">{type}</div>
      ))}
    </div>
  );
};

export default UserBoardHeader;
