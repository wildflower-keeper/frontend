// Compo
import { GoHome } from "react-icons/go";
import { TiMessages } from "react-icons/ti";
import { PiFolderUserFill } from "react-icons/pi";
import { PiSiren } from "react-icons/pi";
import { PiChartLineUpLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
// Types
import { IconType } from "react-icons/lib";

interface Route {
  name: string;
  path: string;
  Icon?: IconType;
}

export const generate_Route = (arg: Route) => ({ ...arg });

export const dashboardPageName = "홈 화면";
export const noticePageName = "공지사항";
export const managementPageName = "이용자 관리";
export const emergencyPageName = "긴급상황 발생내역";
export const situationPageName = "징후파악 대시보드";

export const PAGE_ROUTE: Route[] = [
  generate_Route({
    name: dashboardPageName,
    path: "/dashboard",
    Icon: GoHome,
  }),
  generate_Route({
    name: noticePageName,
    path: "/notice",
    Icon: TiMessages,
  }),
  generate_Route({
    name: managementPageName,
    path: "/management",
    Icon: PiFolderUserFill,
  }),
  // generate_Route({
  //   name: emergencyPageName,
  //   path: "/emergency",
  //   Icon: PiSiren,
  // }),
  // generate_Route({
  //   name: situationPageName,
  //   path: "/check",
  //   Icon: PiChartLineUpLight,
  // }),
];

export const EXTRA_PAGE_ROUTE: Route[] = [
  generate_Route({
    name: "관리자 리스트",
    path: "/adminList",
    Icon: MdPersonOutline,
  }),
  generate_Route({
    name: "설정",
    path: "/setting",
    Icon: IoSettingsOutline,
  }),
];

interface HeaderName {
  [path: string]: string;
}

export const HEADER_NAME: HeaderName = {
  "/dashboard": "홈 화면",
  "/management": "이용자 관리",
  "/emergency": "긴급상황 발생내역",
};