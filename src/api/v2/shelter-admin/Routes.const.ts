import { generatePathByBase, genreateBasePath_v2 } from "@/api/utils.const";

export const BASE_PATH = genreateBasePath_v2("shelter-admin");

export const CREATE_ADMIN_ACCOUNT = generatePathByBase(BASE_PATH, "shelter-account");