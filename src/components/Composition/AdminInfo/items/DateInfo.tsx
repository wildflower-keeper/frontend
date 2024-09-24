"use client";

// Utils
import React, { useEffect, useState } from "react";
import useUpdateTimer from "@/store/useUpdateTimer";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

const DateInfo = () => {
  const [timeStamp, setTimeStamp] = useState<string>(
    format(new Date(), "M월 d일 (EEE) HH:mm", { locale: ko }),
  );
  const { updateTimer } = useUpdateTimer();

  useEffect(() => {
    const tick = setTimeout(
      () =>
        setTimeStamp(format(new Date(), "M월 d일 (EEE) HH:mm", { locale: ko })),
      1000,
    );

    return () => clearTimeout(tick);
  }, []);

  return (
    <div className="flex flex-col h-fit my-auto gap-1">
      <p className="text-xl font-bold">{timeStamp}</p>
      <p className="text-fontWeak">
        {updateTimer
          ? `${updateTimer}에 업데이트 되었습니다.`
          : "업데이트 시간을 나타냅니다."}
      </p>
    </div>
  );
};

export default DateInfo;
