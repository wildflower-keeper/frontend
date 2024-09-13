export interface SleepvoerCountType {
    targetDate: string;
    count: number;
};

export interface LocationTrackingCountType {
    locationTrackedAfter: string;
    locationTrackedHomelessCount: number;
    outingCount: number;
    inShelterCount: number;
};

export interface EmergencyCount {
    emergencyOccurredAfter: string;
    count: number;
};

export interface CurrentUserInfo {
    totalHomelessCount: number;
    sleepoverCount: sleepvoerCountType;
    locationTrackingCount: locationTrackingCountType;
    emergencyCount: emergencyCountType;
};