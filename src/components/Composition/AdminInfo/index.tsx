"use client";

// Compo
import ManagerInfo from "./items/ManagerInfo";
import DateInfo from "./items/DateInfo";
// Utils
import React, { useEffect, useMemo } from "react";
import useUpdateTimer from "@/store/useUpdateTimer";
import { get, head } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { shelterInfo } from "@/api/v1/shelter-admin";
import { format } from "date-fns";
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
      setUpdateTimer(format(new Date(), "M월 dd일 HH시 mm분"));
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
    <div className="flex w-full justify-between">
      <DateInfo />
      <div className="flex flex-col my-auto justify-between gap-3">
        <p className="font-semibold text-xl">{adminUsers.shelterName}</p>
        <ManagerInfo chiefOfficer={adminUsers.chiefOfficer} />
      </div>
    </div>
  );
};

export default AdminInfoContainer;
