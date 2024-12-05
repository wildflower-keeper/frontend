// Compo
import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import { FiSearch } from "react-icons/fi";
// Utils
import React from "react";
// Types
import type {
  FilterValuesType,
  FilterValueType,
} from "@/api/v1/shelter-admin/type";

interface Props {
  value: FilterValueType;
  filterHandler: (value: FilterValueType) => void;
  submitHandler: () => void;
  disabled: boolean;
}

const SearchInput = ({
  value,
  filterHandler,
  submitHandler,
  disabled,
}: Props) => {
  return (
    <div className="bg-white px-3 py-1 w-auto rounded-lg border border-solid border-neutral-300">
      <form
        className="flex justify-center items-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Button
          className="m-auto"
          type="submit"
          onClick={submitHandler}
          disabled={disabled}
        >
          <FiSearch size={22} color="#828282" />
        </Button>
        <Input
          placeholder="이용자 검색"
          className=" w-40 placeholder:text-fontWeak focus:outline-none"
          value={value}
          onChange={(e) => {
            filterHandler(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchInput;
