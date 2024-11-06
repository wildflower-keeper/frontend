"use client";

// Utils
import React, { useMemo } from "react";
import { CARD_STYLE } from "./index.const";

interface Props {
  count: number;
  description: string;
  type: "inShelterCount" | "outingCount" | "emergencyCount";
}

const CurrentCard = ({ count, description, type }: Props) => {
  const cardStyle = useMemo(() => {
    return CARD_STYLE.find((card) => card.type === type);
  }, []);

  if (!cardStyle) return <></>;

  return (
    <div className="w-[262px] h-[120px] bg-white rounded-lg shadow">
      <div className="bg-white/20 p-2 rounded-lg w-fit mb-5">
        <cardStyle.Icon size={32} color="white" />
      </div>
      <div className="flex-col gap-1 text-white">
        <p className="text-3xl font-bold">{count}</p>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default CurrentCard;
