"use client";

import React, { useEffect, useMemo, useState } from "react";
import { getCookie, removeCookie } from "@/utils/cookie";
import useLoginStore from "@/store/useLogin";
import { redirect } from "next/navigation";
import useUpdateTimer from "@/store/useUpdateTimer";
import { formatUpdateTime } from "@/utils/date/date";
import PinNumberInfo from "./PinNumberInfo";
import ManagerInfo from "./ManagerInfo";
import DateInfo from "./DateInfo";
import { shelterInfo } from "@/utils/api/v1/shelter-admin";
import { get } from "lodash";
//Types
import type { ShelterInfoType } from "@/utils/api/v1/shelter-admin/type";

const initState = {
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
  const [adminInfo, setAdminInfo] = useState<ShelterInfoType | null>(null);
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
      chiefOfficers: get(adminInfo, "chiefOfficers", initState.chiefOfficers),
      dutyOfficers: get(adminInfo, "dutyOfficers", initState.dutyOfficers),
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
          chiefOfficer={adminUsers.chiefOfficers[0]}
          dutyOfficer={adminUsers.dutyOfficers[0]}
        />
      </div>
    </div>
  );
};

export default AdminInfoContainer;
