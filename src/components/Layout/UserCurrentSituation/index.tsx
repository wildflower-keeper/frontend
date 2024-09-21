import CurrentCardContainer from "@/components/Composition/CurrentCardContainer";
import React from "react";

const UserCurrentSituation = () => {
  return (
    <div>
      <div className=" mb-2">
        <p className="font-bold text-xl">이용자 현황</p>
      </div>
      <CurrentCardContainer />
    </div>
  );
};

export default UserCurrentSituation;
