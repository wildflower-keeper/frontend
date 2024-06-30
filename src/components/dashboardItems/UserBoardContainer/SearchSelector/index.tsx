"use client";

import React from "react";
import { MdOutlineFilterList } from "react-icons/md";

export type filterType = string;

interface SearchSelectorProps {
  onChange: (filter: filterType) => void;
  value: string;
}

const SearchSelector = ({ onChange, value }: SearchSelectorProps) => {
  return (
    <div className="flex justify-center items-center py-2 px-3 bg-white rounded-lg gap-2">
      <MdOutlineFilterList size={22} color="#828282" />
      <select
        className="py-1"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        <option defaultValue="NONE" value="NONE" selected>
          필터
        </option>
        <option value="NAME">이름</option>
      </select>
    </div>
  );
};

export default SearchSelector;
