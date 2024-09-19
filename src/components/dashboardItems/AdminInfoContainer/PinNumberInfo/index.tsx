"use client";

// Utils
import { get } from "lodash";
import React, { useMemo } from "react";
// Types
import { useGetPinNumber } from "@/hooks/queries";

type PinNumberInfoType = {
  shelterName: string;
};

const PinNumberInfo = ({ shelterName }: PinNumberInfoType) => {
  const { data: pinNumberData } = useGetPinNumber();

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
