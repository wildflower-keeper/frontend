"use client";

// Compo
import SearchSelector from "./items/SearchSelector";
import SearchInput from "./items/SearchInput";
// Utils
import React, { useState } from "react";
// Types
import type { FilterValuesType } from "@/api/v1/shelter-admin/type";

const SEARCH_RESULT_PAGE = 1;

interface Props {
  filterParamHandler: (
    pageNumber: number,
    filterValues: FilterValuesType,
  ) => void;
}

const SearchBar = ({ filterParamHandler }: Props) => {
  const [filterValues, setFilterValues] = useState<FilterValuesType>({
    filterType: "NONE",
    filterValue: "",
  });

  const submitHandler = () => {
    filterParamHandler(SEARCH_RESULT_PAGE, filterValues);
    setFilterValues({ filterType: "NONE", filterValue: "" });
  };

  return (
    <>
      <SearchSelector
        filterHandler={(v) =>
          setFilterValues((prev) => ({ ...prev, filterType: v }))
        }
        value={filterValues.filterType}
      />
      <SearchInput
        value={filterValues.filterValue}
        filterValueHandler={(v) =>
          setFilterValues((prev) => ({ ...prev, filterValue: v }))
        }
        submitHandler={submitHandler}
      />
    </>
  );
};

export default SearchBar;
