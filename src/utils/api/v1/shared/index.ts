import { GET } from "../../axios";
import * as ROUTES from "./Routes.const";
// Types
import { ShelterType } from "./type";

export function getShelters(): Promise<ShelterType[]> {
  return GET({ url: ROUTES.SHELTERS });
}
