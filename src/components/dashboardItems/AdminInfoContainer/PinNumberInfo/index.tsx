import React from "react";

const PinNumberInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-xl">센터이름</p>
      <div className="flex gap-1">
        <span className="text-fontWeak">오늘의 핀번호</span>
        <span className="font-semibold">1234</span>
      </div>
    </div>
  );
};

export default PinNumberInfo;
