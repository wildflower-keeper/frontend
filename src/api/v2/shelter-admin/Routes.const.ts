import { generatePathByBase, genreateBasePath_v2 } from "@/api/utils.const";

export const BASE_PATH = genreateBasePath_v2("shelter-admin");

export const ADMIN_LIST = generatePathByBase(BASE_PATH, "shelter-account");
export const DELETE_ADMIN = generatePathByBase(BASE_PATH, "shelter-account");

export const NOTICE_LIST = generatePathByBase(BASE_PATH, "notice");