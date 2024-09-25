import { GET } from "../../axios";
import { generateSplitUrl } from "../../utils.const";
import * as ROUTES from "./Routes.const";
// Types
import { ShelterType } from "./type";

export function getShelters(): Promise<ShelterType[]> {
  return GET({ url: ROUTES.SHELTERS });
}

getShelters.queryKey = () => generateSplitUrl(ROUTES.SHELTERS);
