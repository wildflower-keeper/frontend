import { generatePathByBase, genreateBasePath } from "../../utils.const";

export const BASE_PATH = genreateBasePath("shelter-admin");

export const SHELTER = generatePathByBase(BASE_PATH, "shelter");
export const PIN = generatePathByBase(BASE_PATH, "pin");
export const FIRST_AUTH = generatePathByBase(BASE_PATH, "verification-code");
export const SECOND_AUTH = generatePathByBase(BASE_PATH, "auth-token");
export const LOGOUT = generatePathByBase(BASE_PATH, "logout");
export const SLEEPOVERS = generatePathByBase(BASE_PATH, "sleepovers");
export const EMERGENCY = generatePathByBase(BASE_PATH, "emergency");


export const HOMELESS_PEOPLE = generatePathByBase(BASE_PATH, "homeless-people");
export const HOMELESS_PEOPLE_COUNT = generatePathByBase(HOMELESS_PEOPLE,"count",);

export const MONTHLY_COUNT = generatePathByBase(BASE_PATH, "monthly");
export const SLEEPOVER_MONTHLY_COUNT = generatePathByBase(MONTHLY_COUNT,"sleepover-counts",);
export const OUTING_MONTHLY_COUNT = generatePathByBase(MONTHLY_COUNT,"outing-counts",);
export const INSHELTER_MONTHLY_COUNT = generatePathByBase(MONTHLY_COUNT,"homeless-counts",);
export const EMERGENCY_MONTHLY_COUNT = generatePathByBase(MONTHLY_COUNT,"emergency-counts",);
export const USER = generatePathByBase(BASE_PATH, "homeless");
export const CHANGE_USER_STATUS = generatePathByBase(BASE_PATH, "in-out");
