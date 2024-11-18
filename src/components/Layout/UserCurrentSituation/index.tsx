import CurrentCardContainer from "@/components/Composition/CurrentCardContainer";
import React from "react";
import { dashboardPageName } from "../AfterLoginLoyouts/index.const";

const UserCurrentSituation = () => {
  return (
    <div className="w-full">
      <p className="custom-page-name">{dashboardPageName}</p>
      <div className="relative w-full">
        <p className="absolute right-0 bottom-4 text-neutral-400 text-md">(이전 30일)</p>
      </div>
      <CurrentCardContainer />
    </div>
  );
};

export default UserCurrentSituation;
