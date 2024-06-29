"use client";

import { dateInfo } from "@/utils/date/date";
import React, { useEffect, useState } from "react";

const DateInfo = () => {
  const [timeStamp, setTimeStamp] = useState<string>(dateInfo());

  useEffect(() => {
    setInterval(() => {
      setTimeStamp(dateInfo());
    }, 1000);
  }, []);

  return (
    <div className="flex-col h-fit my-auto">
      <p className="text-xl font-bold">{timeStamp}</p>
      <p className="text-fontWeak">
        해당 데이터베이스는 5월 22일 22시 30분에 업데이트 되었습니다.
      </p>
    </div>
  );
};

export default DateInfo;
