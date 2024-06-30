import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import React from "react";
import { FiSearch } from "react-icons/fi";

export type filterValueType = string;

type SearchInputType = {
  value: filterValueType;
  onChange: (value: filterValueType) => void;
  onSubmit: (pageNum: number) => void;
};

const SearchInput = ({ value, onChange, onSubmit }: SearchInputType) => {
  return (
    <div className="bg-white  px-3 py-2 w-auto rounded-lg">
      <form
        className="flex justify-center items-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(1);
        }}
      >
        <Button className="m-auto">
          <FiSearch size={22} color="#828282" />
        </Button>
        <Input
          placeholder="검색"
          className=" w-28 placeholder:text-fontWeak"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchInput;
