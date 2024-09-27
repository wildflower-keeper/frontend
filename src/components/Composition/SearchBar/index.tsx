"use client";

// Compo
import SearchSelector from "./items/SearchSelector";
import SearchInput from "./items/SearchInput";
// Utils
import React from "react";
import { useSearch } from "./hook";
// Types
import type { FilterValuesType } from "@/api/v1/shelter-admin/type";

interface Props {
  paramHandler: (filters: FilterValuesType, page: number) => void;
}

const SearchBar = ({ paramHandler }: Props) => {
  const { filterValues, filterHandler, submitHandler, isSubmitDisabled } =
    useSearch({ paramHandler });
  return (
    <>
      <SearchSelector
        filterHandler={filterHandler}
        value={filterValues.filterType}
      />
      <SearchInput
        value={filterValues.filterValue}
        disabled={isSubmitDisabled}
        filterHandler={filterHandler}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default SearchBar;
