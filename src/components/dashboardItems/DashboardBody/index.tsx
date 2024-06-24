import React from "react";
import UserCurrentSituation from "../UserCurrentSituation";
import AdminInfoContainer from "../AdminInfoContainer";
import UserBoardContainer from "../UserBoardContainer";

const DashboardBody = () => {
  return (
    <div className="grow h-full px-10 py-8">
      <AdminInfoContainer />
      <div className="flex">
        <UserCurrentSituation />
        <UserBoardContainer />
      </div>
    </div>
  );
};

export default DashboardBody;
