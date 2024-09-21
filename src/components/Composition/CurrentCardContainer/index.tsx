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
    <div className="flex gap-3">
      <CurrentCard
        type="inShelterCount"
        count={counts.shelterCount}
        description="센터 내 총 인원수"
      />
      <CurrentCard
        type="outingCount"
        count={counts.outingCount}
        description="금일 외박 인원수"
      />
      <CurrentCard
        type="emergencyCount"
        count={counts.emergencyCount}
        description="긴급상황 발생건수"
      />
    </div>
  );
};

export default CurrentCardContainer;
