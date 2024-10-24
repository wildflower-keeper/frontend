import * as ROUTES from "./Routes.const";
import customAxios, { GET, POST } from "../../axios";
import { generateSplitUrl } from "../../utils.const";
// Types
import type {
  CurrentUserInfo,
  GetEmergencyResponseType,
  GetSleepoverListParam,
  HomelessPeopleListParam,
  HomelessPeopleListResponseType,
  LoginBodyType,
  LoginSuccessType,
  PinNumberResponseType,
  ShelterInfoType,
  SleepoversResponseType,
} from "./type";

export function login(loginData: LoginBodyType): Promise<LoginSuccessType> {
  return customAxios.post(ROUTES.LOGIN, loginData).then(({ data }) => {
    if(!data) { // 입력 데이터가 부족할 경우
      throw new Error("* 인증을 위한 정보가 부족합니다. 모든 정보를 입력해주세요");
    }
    else if ("authToken" in data && "expiredAt" in data) return data;
    else {
      if (data.errorCode === "SHELTER_ADMIN_LOGIN_ID_PASSWORD_INVALID") {
        throw new Error("* 비밀번호가 틀렸습니다. 올바른 비밀번호로 다시 입력해주세요.");
      }
    }
  })
}

export function logout(): Promise<void> {
  return POST({ url: ROUTES.LOGOUT });
}

export function homelessPeopleCount(): Promise<CurrentUserInfo> {
  return GET({ url: ROUTES.HOMELESS_PEOPLE_COUNT });
}

export function homelessPeopleList(
  opt: HomelessPeopleListParam,
): Promise<HomelessPeopleListResponseType> {
  return GET({ url: ROUTES.HOMELESS_PEOPLE, params: opt });
}

export function shelterInfo(): Promise<ShelterInfoType> {
  return GET({ url: ROUTES.SHELTER });
}

export function getSleepoverList(
  opt: GetSleepoverListParam,
): Promise<SleepoversResponseType> {
  return GET({ url: ROUTES.SLEEPOVERS, params: opt });
}

export function getPinNumber(): Promise<PinNumberResponseType> {
  return GET({ url: ROUTES.PIN });
}

export function getEmergency(): Promise<GetEmergencyResponseType> {
  return GET({ url: ROUTES.EMERGENCY });
}

login.mutationKey = () => generateSplitUrl(ROUTES.LOGIN);
logout.mutationKey = () => generateSplitUrl(ROUTES.LOGOUT);

homelessPeopleCount.queryKey = () =>
  generateSplitUrl(ROUTES.HOMELESS_PEOPLE_COUNT);
homelessPeopleList.queryKey = () => generateSplitUrl(ROUTES.HOMELESS_PEOPLE);
shelterInfo.queryKey = () => generateSplitUrl(ROUTES.SHELTER);
getSleepoverList.queryKey = () => generateSplitUrl(ROUTES.SLEEPOVERS);
getPinNumber.queryKey = () => generateSplitUrl(ROUTES.PIN);
getEmergency.queryKey = () => generateSplitUrl(ROUTES.EMERGENCY);
