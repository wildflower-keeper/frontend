// Compo
import { MdPeople } from "react-icons/md";
import { PiClockCounterClockwise } from "react-icons/pi";
import { RiBox3Fill } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
// Types
import type { IconType } from "react-icons/lib";

interface Card {
  type: string;
  Icon: IconType;
  textColor: string;
  bgColor: string;
  oulineColor: string;
}

export enum CARD_TEXT_COLORS {
  blue = `text-[#4D73FF]`,
  green = `text-[#19C23D]`,
  red = `text-[#FF3D00]`,
  yellow = `text-[#FEC53D]`,
}

export enum CARD_OUTLINE_COLORS {
  blue = `outline-[#4D73FF]`,
  green = `outline-[#19C23D]`,
  red = `outline-[#FF3D00]`,
  yellow = `outline-[#FEC53D]`,
}

export enum CARD_BG_COLORS {
  blue = "bg-[#CAD5FF]",
  green = "bg-[#CEF2D6]",
  red = "bg-[#FFD6C9]",
  yellow = "bg-[#FEF2D6]"
}

export const generate_Card = (arg: Card) => ({ ...arg });

export const CARD_STYLE: Card[] = [
  generate_Card({
    type: "inShelterCount",
    Icon: MdPeople,
    textColor: CARD_TEXT_COLORS.green,
    bgColor: CARD_BG_COLORS.green,
    oulineColor: CARD_OUTLINE_COLORS.green
  }),
  generate_Card({
    type: "outingCount",
    Icon: PiClockCounterClockwise,
    textColor: CARD_TEXT_COLORS.blue,
    bgColor: CARD_BG_COLORS.blue,
    oulineColor: CARD_OUTLINE_COLORS.blue
  }),
  generate_Card({
    type: "sleepoverCount",
    Icon: RiBox3Fill,
    textColor: CARD_TEXT_COLORS.yellow,
    bgColor: CARD_BG_COLORS.yellow,
    oulineColor: CARD_OUTLINE_COLORS.yellow
  }),
  generate_Card({
    type: "emergencyCount",
    Icon: AiOutlineLineChart,
    textColor: CARD_TEXT_COLORS.red,
    bgColor: CARD_BG_COLORS.red,
    oulineColor: CARD_OUTLINE_COLORS.red
  }),
];
