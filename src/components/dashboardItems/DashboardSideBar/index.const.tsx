// Compo
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { TbRefreshAlert } from "react-icons/tb";
// Types
import { IconType } from "react-icons/lib";

interface Route {
  path: string;
  Icon?: IconType;
}

export const generate_Route = (arg: Route) => ({ ...arg });

export const PAGE_ROUTE: Route[] = [
  generate_Route({
    path: "/dashboard",
    Icon: AiFillHome,
  }),
  generate_Route({
    path: "/management",
    Icon: FaUser,
  }),
  generate_Route({
    path: "/emergency",
    Icon: TbRefreshAlert,
  }),
];
