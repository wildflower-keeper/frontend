"use client";

// Compo
import CurrentCard from "../CurrentCard";
// Utils
import React, { useMemo } from "react";
import { get } from "lodash";
import { useHomelessPeopleCount } from "@/hooks/queries";
// Types

const CurrentCardContainer = () => {
  const { data: currentUserInfo } = useHomelessPeopleCount();

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
        bgColor="green"
        count={counts.shelterCount}
        description="센터 내 총 인원수"
      />
      <CurrentCard
        type="outingCount"
        bgColor="blue"
        count={counts.outingCount}
        description="금일 외박 인원수"
      />
      <CurrentCard
        type="emergencyCount"
        bgColor="red"
        count={counts.emergencyCount}
        description="긴급상황 발생건수"
      />
    </div>
  );
};

export default CurrentCardContainer;
