// Compo
import UserCurrentSituation from "@/components/Layout/UserCurrentSituation";
import UserBoardContainer from "@/components/Layout/UserBoardContainer";
import MonthlyReport from "@/components/Layout/MonthlyReport";
// Utils
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-7">
        <UserCurrentSituation />
        <MonthlyReport />
      </div>
      <UserBoardContainer />
    </div>
  );
};

export default Page;
