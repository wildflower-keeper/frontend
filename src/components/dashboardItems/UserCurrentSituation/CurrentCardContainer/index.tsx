"use client";

import React, { useEffect, useState } from "react";
import customAxios from "@/utils/api/axios";
import { getCookie } from "@/utils/cookie";
import { formatDateTime } from "@/utils/date/date";
import CurrentCard from "../CurrentCard";

type sleepvoerCountType = {
  targetDate: string;
  count: number;
};

type locationTrackingCountType = {
  locationTrackedAfter: string;
  locationTrackedHomelessCount: number;
  outingCount: number;
  inShelterCount: number;
};

type emergencyCountType = {
  emergencyOccurredAfter: string;
  count: number;
};

type currentUserInfoType = {
  totalHomelessCount: number;
  sleepoverCount: sleepvoerCountType;
  locationTrackingCount: locationTrackingCountType;
  emergencyCount: emergencyCountType;
};

const CurrentCardContainer = () => {
  const [currentUserInfo, setCurrentUserInfo] = useState<currentUserInfoType>({
    totalHomelessCount: 0,
    sleepoverCount: { targetDate: "", count: 0 },
    locationTrackingCount: {
      locationTrackedAfter: "",
      locationTrackedHomelessCount: 0,
      outingCount: 0,
      inShelterCount: 0,
    },
    emergencyCount: { emergencyOccurredAfter: "", count: 0 },
  });
  useEffect(() => {
    const fetchCurrentUserInfo = async () => {
      const res = await customAxios({
        url: `/api/v1/shelter-admin/homeless-people/count?targetDateTime=${formatDateTime(new Date())}`,
        method: "GET",
        headers: {
          "auth-token": getCookie("authToken"),
        },
      });
      if (res.status === 200) {
        setCurrentUserInfo(res.data);
      }
    };
    fetchCurrentUserInfo();
  }, []);

  return (
    <div className="flex gap-3">
      <CurrentCard
        type="inShelterCount"
        bgColor="green"
        count={currentUserInfo.locationTrackingCount.inShelterCount}
        description="센터 내 총 인원수"
      />
      <CurrentCard
        type="outingCount"
        bgColor="blue"
        count={currentUserInfo.sleepoverCount.count}
        description="외박중인 인원수"
      />
      <CurrentCard
        type="emergencyCount"
        bgColor="red"
        count={currentUserInfo.emergencyCount.count}
        description="긴급상황 발생건수"
      />
    </div>
  );
};

export default CurrentCardContainer;
