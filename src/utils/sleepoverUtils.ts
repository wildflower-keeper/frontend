import { dateComparison } from "./date/date";
//Types
import type {
  AddSituationSleepoverType,
  SleepoverItemType,
  SleepoverSituation,
} from "@/api/v1/shelter-admin/type";

// startDate, endDate로 외박 상태를 만드는 함수.
export function addStatus(
  list: SleepoverItemType[],
): AddSituationSleepoverType[] {
  return list.map((item: SleepoverItemType) => {
    const sleepoverSituation: SleepoverSituation = dateComparison(
      new Date(item.startDate),
      new Date(item.endDate),
    );
    return { ...item, sleepoverSituation };
  });
}
