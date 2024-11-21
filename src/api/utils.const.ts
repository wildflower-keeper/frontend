import { join, split } from "lodash";

export const genreateBasePath = (path: string, version = "v1") =>
  join(["api", version, path], "/");
export const genreateBasePath_v2 = (path: string, version = "v2") =>
  join(["api", version, path], "/");
export const generatePathByBase = (base: string, ...paths: string[]) =>
  join([base, ...paths], "/");

export const generateSplitUrl = (url: string) => split(url, "/");
