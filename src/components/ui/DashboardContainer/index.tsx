import DashboardBody from "@/components/dashboardItems/DashboardBody";
import DashboardHeader from "@/components/dashboardItems/DashboardHeader";
import DashboardSideBar from "@/components/dashboardItems/DashboardSideBar";
import React from "react";

const DashboardContainer = () => {
  return (
    <div className="flex w-[1366px] min-h-screen m-auto bg-dashboardBackgroundColor">
      <DashboardSideBar />
      <div className="grow flex-col h-full">
        <DashboardHeader />
        <DashboardBody />
      </div>
    </div>
  );
};

export default DashboardContainer;
