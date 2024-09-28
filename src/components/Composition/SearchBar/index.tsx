"use client";

// Compo
import SearchSelector from "./items/SearchSelector";
import SearchInput from "./items/SearchInput";
// Utils
import React from "react";
import { useSearch } from "@/hooks/useSearch";
import { FilterValuesType } from "@/api/v1/shelter-admin/type";
// Types
interface Props {
  submitHandler: (filters: FilterValuesType, page: number) => void;
}

const SearchBar = ({ submitHandler }: Props) => {
  const { filterValues, filterHandler, isSubmitDisabled } = useSearch();
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
        submitHandler={() => submitHandler(filterValues, 1)}
      />
    </>
  );
};

export default SearchBar;
