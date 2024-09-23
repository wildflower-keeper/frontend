"use client";

// Compo
import { MdOutlineFilterList } from "react-icons/md";
// Utils
import React from "react";
// Types
import type { FilterType } from "@/api/v1/shelter-admin/type";

interface Props {
  filterHandler: (filter: FilterType) => void;
  value: string;
}

const SearchSelector = ({ filterHandler, value }: Props) => {
  return (
    <div className="flex justify-center items-center py-2 px-3 bg-white rounded-lg gap-2">
      <MdOutlineFilterList size={22} color="#828282" />
      <select
        className="py-1"
        onChange={(e) => {
          filterHandler(e.target.value as FilterType);
        }}
        value={value}
      >
        <option value="NONE">필터</option>
        <option value="NAME">이름</option>
      </select>
    </div>
  );
};

export default SearchSelector;
