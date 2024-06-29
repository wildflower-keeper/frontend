"use client";

import React, { useEffect } from "react";
import useDashboardStore from "@/store/useDashboard";
import useLoginStore from "@/store/useLogin";
import { redirect } from "next/navigation";
import { getCookie } from "@/utils/cookie";
import UserCurrentSituation from "../UserCurrentSituation";
import AdminInfoContainer from "../AdminInfoContainer";
import UserBoardContainer from "../UserBoardContainer";
import MonthlyReport from "../MonthlyReport";
import ManagementContainer from "../ManagementContainer";

const DashboardBody = () => {
  const { isLogin, setIsLogin } = useLoginStore();
  const { dashboard } = useDashboardStore();

  useEffect(() => {
    if (!isLogin && getCookie("authToken")) {
      setIsLogin(true);
    } else {
      redirect("/auth");
    }
  }, [isLogin]);

  return (
    <div className="grow h-full px-16 py-5 flex flex-col gap-8">
      <AdminInfoContainer />
      {dashboard === "dashboard" ? (
        <div className="flex justify-between">
          <div className="flex flex-col gap-7">
            <UserCurrentSituation />
            <MonthlyReport />
          </div>

          <UserBoardContainer />
        </div>
      ) : (
        <ManagementContainer />
      )}
    </div>
  );
};

export default DashboardBody;
