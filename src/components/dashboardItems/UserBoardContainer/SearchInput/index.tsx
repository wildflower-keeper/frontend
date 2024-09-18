import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import React from "react";
import { FiSearch } from "react-icons/fi";
//Types
import type { FilterValueType } from "@/types/type";

interface Props {
  value: FilterValueType;
  filterValueHandler: (value: FilterValueType) => void;
  submitHandler: (pageNum: number) => void;
}

const SEARCH_RESULT_PAGE = 1;

const SearchInput = ({ value, filterValueHandler, submitHandler }: Props) => {
  return (
    <div className="bg-white  px-3 py-2 w-auto rounded-lg">
      <form
        className="flex justify-center items-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Button
          className="m-auto"
          type="submit"
          onClick={() => submitHandler(SEARCH_RESULT_PAGE)}
        >
          <FiSearch size={22} color="#828282" />
        </Button>
        <Input
          placeholder="검색"
          className=" w-28 placeholder:text-fontWeak"
          value={value}
          onChange={(e) => {
            filterValueHandler(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchInput;
