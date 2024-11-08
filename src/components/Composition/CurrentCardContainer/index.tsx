"use client";

// Compo
import CurrentCard from "./CurrentCard";
// Utils
import React, { useMemo, useState } from "react";
import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { homelessPeopleCount } from "@/api/v1/shelter-admin";
import UserStatusChart from "@/components/Chart/UserStatusChart";
// Types

export type statusCountType = "inShelterCount" | "outShelterCount" | "sleepoverCount" | "emergencyCount"

export interface StatusCountType {
  inShelterCount: boolean
  outShelterCount: boolean
  sleepoverCount: boolean
  emergencyCount: boolean
}

const CurrentCardContainer = () => {
  const { data: currentUserInfo } = useQuery({
    queryKey: homelessPeopleCount.queryKey(),
    queryFn: homelessPeopleCount,
  });

  const counts = useMemo(() => {
    return {
      shelterCount: get(
        currentUserInfo,
        "locationTrackingCount.inShelterCount",
        0,
      ),
      emergencyCount: get(currentUserInfo, "emergencyCount.count", 0),
      outingCount: get(currentUserInfo, "sleepoverCount.count", 0),
    };
  }, [currentUserInfo]);

  const [selectedStatusCount, setSelectedStatusCount] = useState<StatusCountType>(
    {
      inShelterCount: false,
      outShelterCount: false,
      sleepoverCount: false,
      emergencyCount: false
    }
  );

  const onStatusCountClick = (seletedStatus: statusCountType) => {
    const newObj = {...selectedStatusCount};
    newObj[seletedStatus] = !newObj[seletedStatus];
    setSelectedStatusCount(newObj);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-around gap-5">
        <CurrentCard
          type="inShelterCount"
          count={counts.shelterCount}
          description="센터 총 인원수"
          selected={selectedStatusCount.inShelterCount}
          onClick={() => onStatusCountClick("inShelterCount")}
        />
        <CurrentCard
          type="outShelterCount"
          count={counts.outingCount}
          description="외출 횟수"
          selected={selectedStatusCount.outShelterCount}
          onClick={() => onStatusCountClick("outShelterCount")}
        />
        <CurrentCard
          type="sleepoverCount"
          count={counts.emergencyCount}
          description="외박 신청 횟수"
          selected={selectedStatusCount.sleepoverCount}
          onClick={() => onStatusCountClick("sleepoverCount")}
        />
        <CurrentCard
          type="emergencyCount"
          count={counts.emergencyCount}
          description="오늘 긴급상황"
          selected={selectedStatusCount.emergencyCount  }
          onClick={() => onStatusCountClick("emergencyCount")}
        />
      </div>
      <UserStatusChart selectedStatusCount={selectedStatusCount} />
    </div>
  );
};

export default CurrentCardContainer;
