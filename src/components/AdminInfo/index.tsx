"use client";

// Compo
import PinNumberInfo from "./items/PinNumberInfo";
import ManagerInfo from "./items/ManagerInfo";
import DateInfo from "./items/DateInfo";
// Utils
import React, { useEffect, useMemo } from "react";
import useUpdateTimer from "@/store/useUpdateTimer";
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
  const { setUpdateTimer } = useUpdateTimer();
  const { data: adminInfo } = useQuery({
    queryKey: shelterInfo.queryKey(),
    queryFn: shelterInfo,
  });

  useEffect(() => {
    if (adminInfo) {
      setUpdateTimer(formatUpdateTime(new Date()));
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
