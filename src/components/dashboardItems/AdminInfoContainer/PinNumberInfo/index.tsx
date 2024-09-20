"use client";

// Utils
import React, { useMemo } from "react";
import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { getPinNumber } from "@/utils/api/v1/shelter-admin";
// Types

type PinNumberInfoType = {
  shelterName: string;
};

const PinNumberInfo = ({ shelterName }: PinNumberInfoType) => {
  const { data: pinNumberData } = useQuery({
    queryKey: getPinNumber.queryKey(),
    queryFn: getPinNumber,
  });

  const pinNumber = useMemo(() => {
    return get(pinNumberData, "pin", "0");
  }, [pinNumberData]);

  return (
    <div className="flex flex-col gap-2 min-w-60">
      <p className="font-semibold text-xl">{shelterName}</p>
      <div className="flex gap-1">
        <span className="text-fontWeak">오늘의 핀번호</span>
        <span className="font-semibold">{pinNumber}</span>
      </div>
    </div>
  );
};

export default PinNumberInfo;
