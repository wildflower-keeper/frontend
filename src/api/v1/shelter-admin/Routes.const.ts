import { generatePathByBase, genreateBasePath } from "../../utils.const";

export const BASE_PATH = genreateBasePath("shelter-admin");

export const SHELTER = generatePathByBase(BASE_PATH, "shelter");
export const PIN = generatePathByBase(BASE_PATH, "pin");
export const LOGIN = generatePathByBase(BASE_PATH, "login");
export const LOGOUT = generatePathByBase(BASE_PATH, "logout");
export const SLEEPOVERS = generatePathByBase(BASE_PATH, "sleepovers");
export const EMERGENCY = generatePathByBase(BASE_PATH, "emergency");

export const HOMELESS_PEOPLE = generatePathByBase(BASE_PATH, "homeless-people");
export const HOMELESS_PEOPLE_COUNT = generatePathByBase(
  HOMELESS_PEOPLE,
  "count",
);
export const CHANGE_USER_STATUS = generatePathByBase(BASE_PATH, "homeless");