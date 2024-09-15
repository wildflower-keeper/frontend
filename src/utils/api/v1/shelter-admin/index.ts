import * as ROUTES from "./Routes.const";
import { GET, POST } from "../../axios";
// Types
import type {
  CurrentUserInfo,
  HomelessPeopleListResponseType,
  PinNumberResponseType,
  ShelterInfoType,
  SleepoversResponseType,
} from "./type";
import { join } from "lodash";

export function logout(): Promise<void> {
  return POST({ url: ROUTES.LOGOUT });
}

export function homelessPeopleCount(): Promise<CurrentUserInfo> {
  return GET({ url: ROUTES.HOMELESS_PEOPLE_COUNT });
}

export function homelessPeopleList(
  queryString: string,
): Promise<HomelessPeopleListResponseType> {
  const URL = join([ROUTES.HOMELESS_PEOPLE, queryString], "?");
  return GET({ url: URL });
}

export function shelterInfo(): Promise<ShelterInfoType> {
  return GET({ url: ROUTES.SHELTER });
}

export function getSleepoverList(
  queryString: string,
): Promise<SleepoversResponseType> {
  const URL = join([ROUTES.SLEEPOVERS, queryString], "?");
  return GET({ url: URL });
}

export function getPinNumber(): Promise<PinNumberResponseType> {
  return GET({ url: ROUTES.PIN });
}
