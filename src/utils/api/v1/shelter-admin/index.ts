import * as ROUTES from "./Routes.const";
import { GET, POST } from "../../axios";
import { join } from "lodash";
// Types
import type {
  CurrentUserInfo,
  HomelessPeopleListResponseType,
  LoginBodyType,
  LoginResponseType,
  PinNumberResponseType,
  ShelterInfoType,
  ShelterType,
  SleepoversResponseType,
} from "./type";

export function login(loginData: LoginBodyType): Promise<LoginResponseType> {
  return POST({ url: ROUTES.LOGIN, data: loginData });
}

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

export function getShelters(): Promise<ShelterType[]> {
  return GET({ url: ROUTES.SHARED_SHELTERS });
}
