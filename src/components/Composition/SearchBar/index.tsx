// Compo
import SearchSelector from "./items/SearchSelector";
import SearchInput from "./items/SearchInput";
// Utils
import React from "react";
// Types
import type { FilterValuesType } from "@/api/v1/shelter-admin/type";
import type { FilterHandlerType } from "@/hooks/useSearch";

interface Props {
  filterValues: FilterValuesType;
  isSubmitDisabled: boolean;
  filterHandler: FilterHandlerType;
  submitHandler: () => void;
}

const SearchBar = ({
  filterValues,
  isSubmitDisabled,
  filterHandler,
  submitHandler,
}: Props) => {
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
