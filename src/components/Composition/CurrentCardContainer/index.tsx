"use client";

// Compo
import CurrentCard from "./CurrentCard";
// Utils
import React, { useMemo, useState } from "react";
import { get } from "lodash";
import { useQueries, useQuery } from "@tanstack/react-query";
import { emergencyCount, homelessPeopleCount, inShelterMonthlyCount, outingMonthlyCount, sleepoverCount } from "@/api/v1/shelter-admin";
import UserStatusChart from "@/components/Chart/UserStatusChart";
// Types

export type statusCountType = "inShelterCount" | "outingCount" | "sleepoverCount" | "emergencyCount"

export interface slectedStatusType {
  inShelterCount: boolean
  outingCount: boolean
  sleepoverCount: boolean
  emergencyCount: boolean
}

export interface statusCountDataType {
  inShelterCount: number[]
  outingCount: number[]
  sleepoverCount: number[]
  emergencyCount: number[]
}

const CurrentCardContainer = () => {
  const { data: currentUserInfo } = useQuery({
    queryKey: homelessPeopleCount.queryKey(),
    queryFn: homelessPeopleCount,
  });

  const counts = useMemo(() => {
    return {
      inShelterCount: get(
        currentUserInfo,
        "locationTrackingCount.inShelterCount",
        0,
      ),
      outingCount: get(
        currentUserInfo,
        "locationTrackingCount.outingCount",
        0
      ),
      sleepoverCount: get(
        currentUserInfo,
        "sleepoverCount.count",
        0
      ),
      emergencyCount: get(
        currentUserInfo,
        "emergencyCount.count",
        0
      ),
    };
  }, [currentUserInfo]);

  const queryResults = useQueries({
    queries: [
      {
        queryKey: inShelterMonthlyCount.queryKey(),
        queryFn: inShelterMonthlyCount
      },
      {
        queryKey: outingMonthlyCount.queryKey(),
        queryFn: outingMonthlyCount
      },
      {
        queryKey: sleepoverCount.queryKey(),
        queryFn: sleepoverCount
      },
      {
        queryKey: emergencyCount.queryKey(),
        queryFn: emergencyCount
      }
    ]
  });

  const [inShelterCountResult, outingCountResult, sleepoverCountResult, emergencyCountResult] = queryResults;

  const statusCountData = {
    inShelterCount: inShelterCountResult.data,
    outingCount: outingCountResult.data,
    sleepoverCount: sleepoverCountResult.data,
    emergencyCount: emergencyCountResult.data
  }

  const [selectedStatusCount, setSelectedStatusCount] = useState<slectedStatusType>(
    {
      inShelterCount: false,
      outingCount: false,
      sleepoverCount: false,
      emergencyCount: false
    }
  );

  const onStatusCountClick = (seletedStatus: statusCountType) => {
    const newObj = { ...selectedStatusCount };
    newObj[seletedStatus] = !newObj[seletedStatus];
    setSelectedStatusCount(newObj);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-around gap-5">
        <CurrentCard
          type="inShelterCount"
          count={counts.inShelterCount}
          description="센터 총 인원수"
          selected={selectedStatusCount.inShelterCount}
          onClick={() => onStatusCountClick("inShelterCount")}
        />
        <CurrentCard
          type="outingCount"
          count={counts.outingCount}
          description="외출 횟수"
          selected={selectedStatusCount.outingCount}
          onClick={() => onStatusCountClick("outingCount")}
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
          selected={selectedStatusCount.emergencyCount}
          onClick={() => onStatusCountClick("emergencyCount")}
        />
      </div>
      <UserStatusChart selectedStatusCount={selectedStatusCount} statusCountData={statusCountData} />
    </div>
  );
};

export default CurrentCardContainer;
