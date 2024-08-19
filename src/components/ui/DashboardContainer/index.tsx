import DashboardBody from "@/components/dashboardItems/DashboardBody";
import DashboardHeader from "@/components/dashboardItems/DashboardHeader";
import DashboardSideBar from "@/components/dashboardItems/DashboardSideBar";
import React, { Suspense } from "react";

const DashboardContainer = () => {
  return (
    <div className="flex w-full min-h-screen m-auto bg-dashboardBackgroundColor">
      <DashboardSideBar />
      <div className="grow flex-col h-full">
        <Suspense fallback={<div>loading</div>}>
          <DashboardHeader />
        </Suspense>

        <DashboardBody />
      </div>
    </div>
  );
};

export default DashboardContainer;
