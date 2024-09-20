"use client";

// Compo
import PinNumberInfo from "./PinNumberInfo";
import ManagerInfo from "./ManagerInfo";
import DateInfo from "./DateInfo";
// Utils
import React, { useEffect, useMemo } from "react";
import useUpdateTimer from "@/store/useUpdateTimer";
import useLoginStore from "@/store/useLogin";
import { getCookie, removeCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { formatUpdateTime } from "@/utils/date/date";
import { get, head } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { shelterInfo } from "@/utils/api/v1/shelter-admin";
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
  const { data: adminInfo, isError } = useQuery({
    queryKey: shelterInfo.queryKey(),
    queryFn: shelterInfo,
  });

  useEffect(() => {
    if (adminInfo) {
      setUpdateTimer(formatUpdateTime(new Date()));
    }
    if (isError) {
      removeCookie("authToken");
      setIsLogin(false);
      redirect("/auth");
    }
  }, [adminInfo, isError, setUpdateTimer, setIsLogin]);

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
