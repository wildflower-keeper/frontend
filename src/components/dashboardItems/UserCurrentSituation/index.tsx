import React from "react";
import CurrentCard from "./CurrentCard";

const UserCurrentSituation = () => {
  return (
    <div className="w-full">
      <div className=" mb-2">
        <p className="font-bold">이용자 현황</p>
      </div>
      <div className="flex gap-3">
        <CurrentCard
          type="total"
          bgColor="green"
          count={112}
          description="센터 내 총 인원수"
        />
        <CurrentCard
          type="outting"
          bgColor="blue"
          count={8}
          description="외박중인 인원수"
        />
        <CurrentCard
          type="emergency"
          bgColor="red"
          count={1}
          description="긴급상황 발생건수"
        />
      </div>
    </div>
  );
};

export default UserCurrentSituation;
