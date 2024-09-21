"use client";

import useUpdateTimer from "@/store/useUpdateTimer";
import { dateInfo } from "@/utils/string/date";
import React, { useEffect, useState } from "react";

const DateInfo = () => {
  const [timeStamp, setTimeStamp] = useState<string>(dateInfo());
  const { updateTimer } = useUpdateTimer();
  useEffect(() => {
    setInterval(() => {
      setTimeStamp(dateInfo());
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col h-fit my-auto gap-1">
      <p className="text-xl font-bold">{timeStamp}</p>
      <p className="text-fontWeak">{updateTimer}</p>
    </div>
  );
};

export default DateInfo;
