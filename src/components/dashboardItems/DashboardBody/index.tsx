"use client";

import React from "react";
import useDashboardStore from "@/store/useDashboard";

import UserCurrentSituation from "../UserCurrentSituation";
import AdminInfoContainer from "../../AdminInfo";
import UserBoardContainer from "../UserBoardContainer";
import MonthlyReport from "../MonthlyReport";
import ManagementContainer from "../ManagementContainer";
import EmergencyContainer from "../EmergencyContainer";

const DashboardBody = () => {
  const { dashboard } = useDashboardStore();

  return (
    <div className="grow h-full px-16 py-5 flex flex-col gap-8">
      <AdminInfoContainer />
      {dashboard === "dashboard" && (
        <div className="flex justify-between">
          <div className="flex flex-col gap-7">
            <UserCurrentSituation />
            <MonthlyReport />
          </div>

          <UserBoardContainer />
        </div>
      )}
      {dashboard === "management" && <ManagementContainer />}
      {dashboard === "emergency" && <EmergencyContainer />}
    </div>
  );
};

export default DashboardBody;
