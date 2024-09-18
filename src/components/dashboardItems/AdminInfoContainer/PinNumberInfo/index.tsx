"use client";

import { getPinNumber } from "@/utils/api/v1/shelter-admin";
import { get } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
//Types
import type { PinNumberResponseType } from "@/utils/api/v1/shelter-admin/type";

type PinNumberInfoType = {
  shelterName: string;
};

const PinNumberInfo = ({ shelterName }: PinNumberInfoType) => {
  const [pinNumberObject, setPinNumberObject] =
    useState<PinNumberResponseType | null>(null);

  useEffect(() => {
    getPinNumber()
      .then(setPinNumberObject)
      .catch(() => {});
  }, []);

  const pinNumber = useMemo(() => {
    return get(pinNumberObject, "pin", "0");
  }, [pinNumberObject]);

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
