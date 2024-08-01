"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import UserCurrentSituation from "../UserCurrentSituation";
import AdminInfoContainer from "../AdminInfoContainer";
import UserBoardContainer from "../UserBoardContainer";
import MonthlyReport from "../MonthlyReport";
import ManagementContainer from "../ManagementContainer";
import EmergencyContainer from "../EmergencyContainer";

const DashboardBody = () => {
  const dashboardType = useSearchParams().get("type");

  return (
    <div className="grow h-full px-16 py-5 flex flex-col gap-8">
      <AdminInfoContainer />
      {dashboardType === null && (
        <div className="flex justify-between">
          <div className="flex flex-col gap-7">
            <UserCurrentSituation />
            <MonthlyReport />
          </div>

          <UserBoardContainer />
        </div>
      )}
      {dashboardType === "management" && <ManagementContainer />}
      {dashboardType === "emergency" && <EmergencyContainer />}
    </div>
  );
};

export default DashboardBody;
