// Compo
import { AiOutlineTeam } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { RiLoginBoxLine } from "react-icons/ri";
// Types
import type { IconType } from "react-icons/lib";

interface Card {
  type: string;
  Icon: IconType;
  color: string;
}

export enum CARD_COLORS {
  blue = "bg-[#3384FF]",
  green = "bg-[#04C066]",
  red = "bg-[#FF6838]",
}

export const generate_Card = (arg: Card) => ({ ...arg });

export const CARD_STYLE: Card[] = [
  generate_Card({
    type: "inShelterCount",
    Icon: AiOutlineTeam,
    color: CARD_COLORS.green,
  }),
  generate_Card({
    type: "outingCount",
    Icon: FiPhoneCall,
    color: CARD_COLORS.blue,
  }),
  generate_Card({
    type: "emergencyCount",
    Icon: RiLoginBoxLine,
    color: CARD_COLORS.red,
  }),
];
