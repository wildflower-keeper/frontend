import * as ROUTES from "./Routes.const";
import { GET, POST } from "../../axios";
// Types
import type { CurrentUserInfo, HomelessPeopleListResponseType } from "./type";

export function logout(): Promise<void> {
  return POST({ url: ROUTES.LOGOUT });
}

export function homelessPeopleCount(): Promise<CurrentUserInfo> {
  return GET({ url: ROUTES.HOMELESS_PEOPLE_COUNT });
}

export function homelessPeopleList(
  queryString: string,
): Promise<HomelessPeopleListResponseType> {
  const URL = ROUTES.HOMELESS_PEOPLE + queryString;
  return GET({ url: URL });
}