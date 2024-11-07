"use client";

// Compo
import CurrentCard from "./CurrentCard";
// Utils
import React, { useMemo } from "react";
import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { homelessPeopleCount } from "@/api/v1/shelter-admin";
// Types

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

  return (
    <div className="flex flex-row justify-around gap-5">
      <CurrentCard
        type="inShelterCount"
        count={counts.shelterCount}
        description="센터 총 인원수"
      />
      <CurrentCard
        type="activeUserCount"
        count={counts.outingCount}
        description="30분 동안 활성 이용자"
      />
      <CurrentCard
        type="sleepoverCount"
        count={counts.emergencyCount}
        description="외박중인 인원수"
      />
      <CurrentCard
        type="emergencyCount"
        count={counts.emergencyCount}
        description="오늘 긴급상황"
      />
    </div>
  );
};

export default CurrentCardContainer;
