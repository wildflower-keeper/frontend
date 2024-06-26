"use client";

import customAxios from "@/utils/api/axios";
import { getCookie } from "@/utils/cookie";
import React, { useEffect, useState } from "react";

type PinNumberInfoType = {
  shelterName: string;
};

const PinNumberInfo = ({ shelterName }: PinNumberInfoType) => {
  const [pinNumber, setPinNumber] = useState<number>(0);
  useEffect(() => {
    const fetchPinNumber = async () => {
      const res = await customAxios({
        method: "GET",
        url: "/api/v1/shelter-admin/pin",
        headers: {
          "auth-token": getCookie("authToken"),
        },
      });
      if (res.status === 200) {
        setPinNumber(res.data.pin);
      }
    };
    fetchPinNumber();
  }, []);

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
