import * as ROUTES from "./Routes.const";
import customAxios, { GET, POST, PUT, DELETE } from "../../axios";
import { generateSplitUrl } from "../../utils.const";
// Types
import type {
  CurrentUserInfo,
  GetEmergencyResponseType,
  GetSleepoverListParam,
  HomelessPeopleListParam,
  HomelessPeopleListResponseType,
  LocationStatusType,
  LoginBodyType,
  LoginSuccessType,
  PinNumberResponseType,
  SecondAuthType,
  ShelterInfoType,
  SleepoversResponseType,
  StatusCountType,
} from "./type";
import { userDataFormType } from "@/components/Layout/AddUserForm";

export function login(loginData: LoginBodyType): Promise<LoginSuccessType> {
  return customAxios.post(ROUTES.LOGIN, loginData).then(({ data }) => {
    if (!data) { // 입력 데이터가 부족할 경우
      throw new Error("* 인증을 위한 정보가 부족합니다. 모든 정보를 입력해주세요");
    }
    if (data.errorCode === "SHELTER_ADMIN_LOGIN_ID_PASSWORD_INVALID") {
      throw new Error("* 비밀번호가 틀렸습니다. 올바른 비밀번호로 다시 입력해주세요.");
    }
    if ("authToken" in data && "expiredAt" in data) return data;
  });
}

export function firstAuth(loginData: LoginBodyType): Promise<LoginSuccessType> {
  return customAxios.post(ROUTES.FIRST_AUTH, loginData).then(({ data }) => {
    if (!data) { // 입력 데이터가 부족할 경우
      throw new Error("* 인증을 위한 정보가 부족합니다. 모든 정보를 입력해주세요");
    }
    if (data.errorCode === "SHELTER_ADMIN_LOGIN_ID_PASSWORD_INVALID") {
      throw new Error("* 비밀번호가 틀렸습니다. 올바른 비밀번호로 다시 입력해주세요.");
    }
    if ("authToken" in data && "expiredAt" in data) return data;
  });
}

export function secondAuth(secondAuthData: SecondAuthType) {
  return POST({ url: ROUTES.SECOND_AUTH, data: secondAuthData });
}

export function addUser(userData: userDataFormType) {
  return POST({ url: ROUTES.USER, data: userData });
}

export function deleteUser(id: number) {
  return DELETE({ url: ROUTES.USER + '/' + id });
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

export function inShelterMonthlyCount(): Promise<StatusCountType> {
  return GET({url: ROUTES.INSHELTER_MONTHLY_COUNT});
}

export function outingMonthlyCount(): Promise<StatusCountType> {
  return GET({url: ROUTES.OUTING_MONTHLY_COUNT});
}

export function sleepoverCount(): Promise<StatusCountType> {
  return GET({url: ROUTES.SLEEPOVER_MONTHLY_COUNT});
}

export function emergencyCount(): Promise<StatusCountType> {
  return GET({url: ROUTES.EMERGENCY_MONTHLY_COUNT});
}

export async function changeUserStatus(id: number, status: {locationStatus: LocationStatusType}) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return PUT({
    data: status,
    url: ROUTES.BASE_PATH + '/' + id + '/' + 'in-out'
  });
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
firstAuth.mutationKey = () => generateSplitUrl(ROUTES.FIRST_AUTH);
secondAuth.mutationKey = () => generateSplitUrl(ROUTES.SECOND_AUTH);
logout.mutationKey = () => generateSplitUrl(ROUTES.LOGOUT);
changeUserStatus.mutationKey = () => generateSplitUrl(ROUTES.CHANGE_USER_STATUS);

homelessPeopleCount.queryKey = () =>
  generateSplitUrl(ROUTES.HOMELESS_PEOPLE_COUNT);
homelessPeopleList.queryKey = () => generateSplitUrl(ROUTES.HOMELESS_PEOPLE);

inShelterMonthlyCount.queryKey = () => generateSplitUrl(ROUTES.INSHELTER_MONTHLY_COUNT);
outingMonthlyCount.queryKey = () => generateSplitUrl(ROUTES.OUTING_MONTHLY_COUNT);
sleepoverCount.queryKey = () => generateSplitUrl(ROUTES.SLEEPOVER_MONTHLY_COUNT);
emergencyCount.queryKey = () => generateSplitUrl(ROUTES.EMERGENCY_MONTHLY_COUNT);

shelterInfo.queryKey = () => generateSplitUrl(ROUTES.SHELTER);
getSleepoverList.queryKey = () => generateSplitUrl(ROUTES.SLEEPOVERS);
getPinNumber.queryKey = () => generateSplitUrl(ROUTES.PIN);
getEmergency.queryKey = () => generateSplitUrl(ROUTES.EMERGENCY);
addUser.mutationKey = () => generateSplitUrl(ROUTES.USER);
deleteUser.mutationKey = () => generateSplitUrl(ROUTES.USER); 