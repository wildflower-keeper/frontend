import CurrentCardContainer from "@/components/Composition/CurrentCardContainer";
import React from "react";
import { dashboardPageName } from "../AfterLoginLoyouts/index.const";

const UserCurrentSituation = () => {
  return (
    <div className="w-full">
      <div className="mb-2">
        <p className="custom-page-name">{dashboardPageName}</p>
      </div>
      <CurrentCardContainer />
    </div>
  );
};

export default UserCurrentSituation;
