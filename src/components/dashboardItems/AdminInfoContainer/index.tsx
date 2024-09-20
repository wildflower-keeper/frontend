"use client";

// Compo
import PinNumberInfo from "./PinNumberInfo";
import ManagerInfo from "./ManagerInfo";
import DateInfo from "./DateInfo";
// Utils
import React, { useEffect, useMemo } from "react";
import { getCookie, removeCookie } from "@/utils/cookie";
import useLoginStore from "@/store/useLogin";
import { redirect } from "next/navigation";
import useUpdateTimer from "@/store/useUpdateTimer";
import { formatUpdateTime } from "@/utils/date/date";
import { useShelterInfo } from "@/hooks/queries";
import { get, head } from "lodash";
// Types
import type { ShelterInfoType } from "@/utils/api/v1/shelter-admin/type";

const initState: ShelterInfoType = {
  shelterName: "",
  chiefOfficers: [
    {
      chiefOfficerId: 0,
      name: "",
      phoneNumber: "",
    },
  ],
  dutyOfficers: [
    {
      chiefOfficerId: 0,
      name: "",
      phoneNumber: "",
      targetDate: "",
    },
  ],
};

const AdminInfoContainer = () => {
  const { isLogin, setIsLogin } = useLoginStore();
  const { setUpdateTimer } = useUpdateTimer();
  const { data: adminInfo, isSuccess, isError } = useShelterInfo();

  useEffect(() => {
    if (isSuccess) {
      setUpdateTimer(formatUpdateTime(new Date()));
    }
    if (isError) {
      removeCookie("authToken");
      setIsLogin(false);
      redirect("/auth");
    }
  }, [isSuccess, isError]);

  const adminUsers = useMemo(() => {
    return {
      shelterName: get(adminInfo, "shelterName", initState.shelterName),
      chiefOfficer: get(
        adminInfo,
        "chiefOfficers.0",
        head(initState.chiefOfficers),
      ),
      dutyOfficer: get(
        adminInfo,
        "dutyOfficers.0",
        head(initState.dutyOfficers),
      ),
    };
  }, [adminInfo]);

  useEffect(() => {
    if (!isLogin && !getCookie("authToken")) {
      redirect("/auth");
    }
  }, [isLogin]);

  return (
    <div className="w-full flex justify-between">
      <DateInfo />
      <div className="flex items-center rounded-lg border border-dashed border-[#CCCCCC] px-5 py-4 justify-between gap-6">
        <PinNumberInfo shelterName={adminUsers.shelterName} />
        <ManagerInfo
          chiefOfficer={adminUsers.chiefOfficer}
          dutyOfficer={adminUsers.dutyOfficer}
        />
      </div>
    </div>
  );
};

export default AdminInfoContainer;
