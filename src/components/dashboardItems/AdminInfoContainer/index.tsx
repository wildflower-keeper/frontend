"use client";

// Compo
import PinNumberInfo from "./PinNumberInfo";
import ManagerInfo from "./ManagerInfo";
import DateInfo from "./DateInfo";
// Utils
import React, { useEffect, useMemo, useState } from "react";
import useLoginStore from "@/store/useLogin";
import useUpdateTimer from "@/store/useUpdateTimer";
import { getCookie, removeCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { formatUpdateTime } from "@/utils/date/date";
import { shelterInfo } from "@/utils/api/v1/shelter-admin";
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
  const [adminInfo, setAdminInfo] = useState<ShelterInfoType | null>(null);
  const { isLogin, setIsLogin } = useLoginStore();
  const { setUpdateTimer } = useUpdateTimer();

  useEffect(() => {
    //Call API
    shelterInfo()
      .then((res) => {
        setAdminInfo(res);
        setUpdateTimer(formatUpdateTime(new Date()));
      })
      .catch(() => {
        removeCookie("authToken");
        setIsLogin(false);
        redirect("/auth");
      });
  }, []);

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
