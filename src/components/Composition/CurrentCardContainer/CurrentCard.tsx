"use client";

// Utils
import React, { memo, useMemo } from "react";
import { CARD_STYLE } from "./index.const";
import { CardProps, statusCountType } from ".";

interface Props extends CardProps {
  onClick: () => void
}

const CurrentCard = memo(({ count, description, type, isSelected, onClick }: Props) => {
  const cardStyle = useMemo(() => {
    return CARD_STYLE.find((card) => card.type === type);
  }, [type]);

  if (!cardStyle) return <></>;

  return (
    <button onClick={onClick} className={`flex justify-between w-[262px] h-[120px] bg-white shadow-md rounded-lg p-4 ${isSelected && `outline outline-[3px] ${cardStyle.oulineColor}`}`}>
      <div className="flex flex-col gap-3 text-black items-start">
        <p className="text-base">{description}</p>
        <p className="text-3xl font-bold">{count}</p>
      </div>
        <cardStyle.Icon size={50} className={`${cardStyle.textColor} ${cardStyle.bgColor} p-2 rounded-2xl`} />
    </button>
  );
});

export default CurrentCard;
