"use client";

import React, { useState } from "react";
import SearchSelector from "./items/SearchSelector";
import SearchInput from "./items/SearchInput";
//Types
import type { FilterType, FilterValuesType } from "@/types/type";

interface Props {
  filterParamHandler: (pageNum: number, filterValues: FilterValuesType) => void;
}

const SearchBar = ({ filterParamHandler }: Props) => {
  const [filterValues, setFilterValues] = useState<FilterValuesType>({
    filter: "NONE",
    filterValue: "",
  });
  const filterHandler = (value: FilterType) => {
    setFilterValues((prev) => ({ ...prev, filter: value }));
  };

  const filterValueHandler = (value: string) => {
    setFilterValues((prev) => ({ ...prev, filterValue: value }));
  };

  const submitHandler = (pageNum: number) => {
    filterParamHandler(pageNum, filterValues);
    setFilterValues({ filter: "NONE", filterValue: "" });
  };

  return (
    <>
      <SearchSelector
        filterHandler={filterHandler}
        value={filterValues.filter}
      />
      <SearchInput
        value={filterValues.filterValue}
        filterValueHandler={filterValueHandler}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default SearchBar;
