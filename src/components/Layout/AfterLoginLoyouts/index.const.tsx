// Compo
import { GoHome } from "react-icons/go";
import { PiFolderUserFill } from "react-icons/pi";
import { PiSiren } from "react-icons/pi";
import { PiChartLineUpLight } from "react-icons/pi";
// Types
import { IconType } from "react-icons/lib";

interface Route {
  name: string;
  path: string;
  Icon?: IconType;
}

export const generate_Route = (arg: Route) => ({ ...arg });

const PAGE_NAME = ["홈 화면", "이용자 관리", "긴급상황 발생내역"];
export const dashboardPageName = "홈 화면";
export const managementPageName = "이용자 관리";
export const emergencyPageName = "긴급상황 발생내역";

export const PAGE_ROUTE: Route[] = [
  generate_Route({
    name: dashboardPageName,
    path: "/dashboard",
    Icon: GoHome,
  }),
  generate_Route({
    name: managementPageName,
    path: "/management",
    Icon: PiFolderUserFill,
  }),
  generate_Route({
    name: emergencyPageName,
    path: "/emergency",
    Icon: PiSiren,
  }),
  // generate_Route({
  //   name: "징후파악 대시보드",
  //   path: "/check",
  //   Icon: PiChartLineUpLight,
  // }),
];

interface HeaderName {
  [path: string]: string;
}

export const HEADER_NAME: HeaderName = {
  "/dashboard": "홈 화면",
  "/management": "이용자 관리",
  "/emergency": "긴급상황 발생내역",
};
