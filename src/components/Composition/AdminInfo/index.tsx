"use client";

// Compo
import ManagerInfo from "./items/ManagerInfo";
import DateInfo from "./items/DateInfo";
import { PiLineVerticalThin } from "react-icons/pi";
// Utils
import React, { useEffect, useMemo } from "react";
import useUpdateTimer from "@/store/useUpdateTimer";
import { get, head } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { shelterInfo } from "@/api/v1/shelter-admin";
import { formatDateString } from "@/utils/string/date";
// Types
import type { ShelterInfoType } from "@/api/v1/shelter-admin/type";


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
  const { setUpdateTimer } = useUpdateTimer();
  const { data: adminInfo } = useQuery({
    queryKey: shelterInfo.queryKey(),
    queryFn: shelterInfo,
  });

  useEffect(() => {
    if (adminInfo) {
      setUpdateTimer(formatDateString(new Date(), "M월 dd일 HH시 mm분"));
    }
  }, [adminInfo, setUpdateTimer]);
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
    <div className="flex flex-row w-full justify-between items-start bg-neutral-200 p-5 rounded-md">
      <DateInfo />
      <div className="flex flex-row gap-2 items-center">
        <div className="font-semibold text-xl">{adminUsers.shelterName}</div>
        <PiLineVerticalThin />
        <ManagerInfo chiefOfficer={adminUsers.chiefOfficer} />
      </div>
    </div>
  );
};

export default AdminInfoContainer;
