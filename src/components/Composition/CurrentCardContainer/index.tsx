"use client";

// Compo
import CurrentCard from "./CurrentCard";
// Utils
import React, { useCallback, useMemo, useState } from "react";
import { get } from "lodash";
import { useQueries, useQuery } from "@tanstack/react-query";
import { emergencyCount, homelessPeopleCount, inShelterMonthlyCount, outingMonthlyCount, sleepoverCount } from "@/api/v1/shelter-admin";
import UserStatusChart from "@/components/Chart/UserStatusChart";
import { StatusCountType } from "@/api/v1/shelter-admin/type";
// Types

export type statusCountType = "inShelterCount" | "outingCount" | "sleepoverCount" | "emergencyCount"

export interface SelectedStatusType {
  inShelterCount: boolean
  outingCount: boolean
  sleepoverCount: boolean
  emergencyCount: boolean
}

export type StatusCountDataType = {
  [key in statusCountType]: StatusCountType | undefined;
}

export interface CardProps {
  count: number;
  description: string;
  type: statusCountType;
  isSelected: boolean;
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

  const [selectedStatusCount, setSelectedStatusCount] = useState<SelectedStatusType>(
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
  };

  const handleClick = useCallback((type: statusCountType) => () => {
    onStatusCountClick(type);
  }, [onStatusCountClick]);

  const cardData: CardProps[] = useMemo(() => [
    {
      type: "inShelterCount",
      count: counts.inShelterCount,
      description: "센터 총 인원수",
      isSelected: selectedStatusCount.inShelterCount,
    },
    {
      type: "outingCount",
      count: counts.outingCount,
      description: "외출 횟수",
      isSelected: selectedStatusCount.outingCount,
    },
    {
      type: "sleepoverCount",
      count: counts.sleepoverCount,
      description: "외박 신청 횟수",
      isSelected: selectedStatusCount.sleepoverCount,
    },
    {
      type: "emergencyCount",
      count: counts.emergencyCount,
      description: "오늘 긴급상황",
      isSelected: selectedStatusCount.emergencyCount,
    },
  ], [counts, selectedStatusCount]);


  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-around gap-5">
        {
          cardData.map((card, index) => {
            return (
              <CurrentCard
                key={index}
                type={card.type}
                count={card.count}
                description={card.description}
                isSelected={card.isSelected}
                onClick={handleClick(card.type)}
              />
            )
          })
        }
      </div>
      <UserStatusChart selectedStatusCount={selectedStatusCount} statusCountData={statusCountData} />
    </div>
  );
};

export default CurrentCardContainer;
