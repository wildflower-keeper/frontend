// Utils
import { useState } from "react";
// Types
import type { FilterType, FilterValuesType } from "@/api/v1/shelter-admin/type";

export type FilterHandlerValue = string | FilterType;

export interface FilterHandlerType {
  (value: FilterHandlerValue): void;
}

const initValues: FilterValuesType = {
  filterType: "NAME",
  filterValue: "",
};

export const useSearch = () => {
  const [filterValues, setFilterValues] =
    useState<FilterValuesType>(initValues);

  const filterHandler: FilterHandlerType = (value) => {
    const filterType = value === "" ? "NONE" : "NAME";
    setFilterValues({ filterType, filterValue: value });
  };

  const isSubmitDisabled =
    filterValues.filterType === "NAME" && !filterValues.filterValue;

  return { filterValues, filterHandler, isSubmitDisabled };
};
