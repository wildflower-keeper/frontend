import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { RiLoginBoxLine } from "react-icons/ri";

const cardColor = {
  blue: "bg-[#3384FF]",
  green: "bg-[#04C066]",
  red: "bg-[#FF6838]",
} as const;

interface Props {
  bgColor: "blue" | "green" | "red";
  count: number;
  description: string;
  type: "inShelterCount" | "outingCount" | "emergencyCount";
}

const CurrentCard = ({ bgColor, count, description, type }: Props) => {
  return (
    <div className={`w-40 h-40 rounded-2xl p-5 ${cardColor[bgColor]}`}>
      <div className="bg-white/20 p-2 rounded-lg w-fit mb-5">
        {type === "inShelterCount" && <AiOutlineTeam size={32} color="white" />}
        {type === "outingCount" && <RiLoginBoxLine size={32} color="white" />}
        {type === "emergencyCount" && <FiPhoneCall size={32} color="white" />}
      </div>
      <div className="flex-col gap-1 text-white">
        <p className="text-3xl font-bold">{count}</p>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default CurrentCard;
