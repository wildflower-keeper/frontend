"use client";

import React, { useEffect, useMemo, useState } from "react";
import CurrentCard from "../CurrentCard";
// Types
import { CurrentUserInfo } from "@/utils/api/v1/shelter-admin/type";
import { homelessPeopleCount } from "@/utils/api/v1/shelter-admin";
import { get } from "lodash";

const CurrentCardContainer = () => {
  const [currentUserInfo, setCurrentUserInfo] =
    useState<CurrentUserInfo | null>(null);

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
  useEffect(() => {
    // Call API
    homelessPeopleCount()
      .then(setCurrentUserInfo)
      .catch(() => {});
  }, []);

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
