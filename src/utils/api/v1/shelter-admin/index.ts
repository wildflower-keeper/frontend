import * as ROUTES from "./Routes.const";
import customAxios, { GET, POST } from "../../axios";
import { join } from "lodash";
import { generateSplitUrl } from "../../utils.const";
// Types
import type {
  CurrentUserInfo,
  HomelessPeopleListResponseType,
  LoginBodyType,
  LoginSuccessType,
  PinNumberResponseType,
  ShelterInfoType,
  SleepoversResponseType,
} from "./type";

export function login(loginData: LoginBodyType): Promise<LoginSuccessType> {
  return customAxios.post(ROUTES.LOGIN, loginData).then(({ data }) => {
    if ("authToken" in data && "expiredAt" in data) return data;
    else {
      throw new Error(data.description);
    }
  });
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

login.mutationKey = () => generateSplitUrl(ROUTES.LOGIN);
logout.mutationKey = () => generateSplitUrl(ROUTES.LOGOUT);

homelessPeopleCount.queryKey = () =>
  generateSplitUrl(ROUTES.HOMELESS_PEOPLE_COUNT);
homelessPeopleList.queryKey = () => generateSplitUrl(ROUTES.HOMELESS_PEOPLE);
shelterInfo.queryKey = () => generateSplitUrl(ROUTES.SHELTER);
getSleepoverList.queryKey = () => generateSplitUrl(ROUTES.SLEEPOVERS);
getPinNumber.queryKey = () => generateSplitUrl(ROUTES.PIN);
