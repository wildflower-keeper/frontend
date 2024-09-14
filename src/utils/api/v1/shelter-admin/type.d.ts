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

export interface AdminInfoType {
  shelterName: string;
  chiefOfficers: ChiefOfficerType[];
  dutyOfficers: DutyOfficerType[];
}
