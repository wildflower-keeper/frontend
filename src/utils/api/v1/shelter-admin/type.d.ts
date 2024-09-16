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

export interface UserItemType {
  id: number;
  name: string;
  room: string;
  birthDate: string;
  targetDateSleepover: boolean;
  lastLocationStatus: "OUTING" | "IN_SHELTER" | null;
  lastLocationTrackedAt: string;
  phoneNumber: string;
  admissionDate: string;
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

export interface PinNumberResponseType {
  pin: string;
  expiredAt: string;
}

export interface ShelterType {
  shelterId: number;
  shelterName: string;
}

export interface LoginBodyType {
  id: number;
  pw: string;
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
