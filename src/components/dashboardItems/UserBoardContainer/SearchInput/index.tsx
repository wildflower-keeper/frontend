import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import React from "react";
import { FiSearch } from "react-icons/fi";
//Types
import type { FilterValueType } from "@/types/type";

type SearchInputType = {
  value: FilterValueType;
  filterValueHandler: (value: FilterValueType) => void;
  submitHandler: (pageNum: number) => void;
};

//검색 결과로 첫페이지를 보여주어야하기 때문에 1로 작성하였습니다.
const SEARCH_RESULT_PAGE = 1;

const SearchInput = ({
  value,
  filterValueHandler,
  submitHandler,
}: SearchInputType) => {
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
