// Utils
import { useMemo, useState } from "react";
// Types
import type { FilterType, FilterValuesType } from "@/api/v1/shelter-admin/type";

export type FilterHandlerValue = string | FilterType;

export interface FilterHandlerType {
  (key: keyof FilterValuesType, value: FilterHandlerValue): void;
}
export interface SubmitHandlerType {
  (): void;
}

const SEARCH_RESULT_PAGE = 1;

const initValues: FilterValuesType = {
  filterType: "NONE",
  filterValue: "",
};

interface Props {
  paramHandler: (filters: FilterValuesType, page: number) => void;
}

export const useSearch = ({ paramHandler }: Props) => {
  const [filterValues, setFilterValues] =
    useState<FilterValuesType>(initValues);

  const filterHandler: FilterHandlerType = (key, value) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  };

  const submitHandler: SubmitHandlerType = () => {
    paramHandler(filterValues, SEARCH_RESULT_PAGE);
    setFilterValues(initValues);
  };

  const isSubmitDisabled = useMemo(() => {
    return filterValues.filterType === "NAME" && !filterValues.filterValue;
  }, [filterValues]);

  return { filterValues, filterHandler, submitHandler, isSubmitDisabled };
};
