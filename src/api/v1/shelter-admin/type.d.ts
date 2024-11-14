export interface SleepvoerCountType {
  targetDate: string;
  count: number;
}

export interface LocationTrackingCountType {
  locationTrackedAfter: string;
  locationTrackedHomelessCount: number;
  outingCount: number;
  inShelterCount: number;
}

export interface EmergencyCount {
  emergencyOccurredAfter: string;
  count: number;
}

export interface CurrentUserInfo {
  totalHomelessCount: number;
  sleepoverCount: sleepvoerCountType;
  locationTrackingCount: locationTrackingCountType;
  emergencyCount: emergencyCountType;
}

export type LocationStatusType = "OUT_SHELTER" | "IN_SHELTER" | "UNCONFIRMED" | "OVERNIGHT_STAY" | null;

export interface UserItemType {
  id: number;
  lastLocationStatus: LocationStatusType;
  name: string;
  room: string;
  birthDate?: string;
  phoneNumber: string;
  admissionDate?: string;
  targetDateSleepover?: boolean;
  sleepoverStartDate?: string;
  sleepoverEndDate?: string;
  reason?: string;
  emergencyContact?: string;
}

export interface UserBoardItemType extends UserItemType {
  index: number
}

export interface PaginationType {
  currentPageNumber: number;
  nextPageNumber: number;
  pageSize: number;
  lastPageNumber: number;
}

export interface HomelessPeopleListResponseType {
  items: UserItemType[];
  pagination: PaginationType;
}

export interface ChiefOfficerType {
  chiefOfficerId: number;
  name: string;
  phoneNumber: string;
}

export interface DutyOfficerType extends ChiefOfficerType {
  targetDate: string;
}

export interface ShelterInfoType {
  shelterName: string;
  chiefOfficers: ChiefOfficerType[];
  dutyOfficers: DutyOfficerType[];
}

export interface SleepoverItemType {
  sleepoverId: number;
  homelessId: number;
  homelessName: string;
  homelessPhoneNumber: string;
  homelessRoom: string;
  emergencyContact: string;
  reason: string;
  startDate: string;
  endDate: string;
  createdAt: string;
}

export interface SleepoversResponseType {
  items: SleepoverItemType[];
  pagination: {
    currentPageNumber: number;
    nextPageNumber: number;
    pageSize: number;
    lastPageNumber: number;
  };
}

export type SleepoverSituation = "SCHEDULED" | "ONGOING" | "CLOSED";

export interface AddSituationSleepoverType extends SleepoverItemType {
  sleepoverSituation: SleepoverSituation;
}

export type StatusCountType = number[]

export interface PinNumberResponseType {
  pin: string;
  expiredAt: string;
}

export interface LoginBodyType {
  id: number;
  pw: string;
}

export interface SecondAuthType {
  id: number;
  code: string;
}

export interface LoginSuccessType {
  authToken: string;
  expiredAt: string;
}

export interface LoginErrorType {
  errorCode: string;
  description: string;
}
export type LoginResponseType = LoginSuccessType | LoginErrorType;

export type StatusType = "ALL" | "IN_SHELTER" | "OUT_SHELTER" | "OVERNIGHT_STAY" | "UNCONFIRMED" | null ;

export interface StatusFilterType {
    name: "전체" | "외출" | "외박" | "재실" | "미확인",
    type: StatusType,
    isSelected: boolean
}

export type FilterValueType = string;

export type FilterType = "NONE" | "NAME" | 'InOutStatus';

export interface FilterValuesType {
  filterType: FilterType;
  filterValue: FilterValueType;
}

export interface GetSleepoverListParam {
  pageNumber: number;
  pageSize: number;
}
export interface HomelessPeopleListParam
  extends FilterValuesType,
    GetSleepoverListParam {
  sleepoverTargetDate: string;
}

export interface LocationType {
  lat: number | null;
  lng: number | null;
}

export interface EmergencyLogItemType {
  id: number;
  name: string;
  phNumber: string;
  date: string;
  location: LocationType;
}

export interface GetEmergencyResponseType {
  result: string;
  logs: EmergencyLogItemType[];
}
