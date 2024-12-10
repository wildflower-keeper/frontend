"use client";

// Compo
// Utils
import React, { useEffect, useState } from "react";
import useUpdateTimer from "@/store/useUpdateTimer";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

const DateInfo = () => {
  const [timeStamp, setTimeStamp] = useState<string>(
    format(new Date(), "yyyy년 M월 d일", { locale: ko }),
  );
  const { updateTimer } = useUpdateTimer();

  useEffect(() => {
    const tick = setTimeout(
      () =>
        setTimeStamp(format(new Date(), "yyyy년 M월 d일", { locale: ko })),
      1000,
    );

    return () => clearTimeout(tick);
  }, []);

  return (
    <div className="flex flex-col h-fit my-auto gap-3">
      <p>
        {updateTimer}
      </p>
    </div>
  );
};

export default DateInfo;
