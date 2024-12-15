// Compo
import { GoHome } from "react-icons/go";
import { TiMessages } from "react-icons/ti";
import { PiFolderUserFill } from "react-icons/pi";
import { PiSiren } from "react-icons/pi";
import { PiChartLineUpLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { LuDot } from "react-icons/lu";
// Types
import { IconType } from "react-icons/lib";

export const dashboardPageName = "홈 화면";
export const noticePageName = "공지사항";
export const managementPageName = "이용자 관리";
export const emergencyPageName = "긴급상황 발생내역";
export const situationPageName = "징후파악 대시보드";

interface Route {
  name: string;
  path: string;
  Icon: IconType;
}

interface PageListType extends Route {
  subMenu?: Route[]
}

export const generate_Route = (arg: PageListType) => ({ ...arg });

const NOTICE_SUB_ROUTE: Route[] = [
  generate_Route({
    name: "공지사항 발송",
    path: "/notice/send",
    Icon: LuDot,
  }),
  generate_Route({
    name: "공지사항 이력",
    path: "/notice/list",
    Icon: LuDot,
  }),
]

export const PAGE_ROUTE: PageListType[] = [
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
    name: noticePageName,
    path: "/notice",
    Icon: TiMessages,
    subMenu: NOTICE_SUB_ROUTE
  }),
  generate_Route({
    name: "관리자 리스트",
    path: "/adminList",
    Icon: MdPersonOutline,
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