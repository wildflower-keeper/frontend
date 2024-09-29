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
  filterHandler: (key: keyof FilterValuesType, value: FilterValueType) => void;
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
          onClick={submitHandler}
          disabled={disabled}
        >
          <FiSearch size={22} color="#828282" />
        </Button>
        <Input
          placeholder="검색"
          className=" w-28 placeholder:text-fontWeak"
          value={value}
          onChange={(e) => {
            filterHandler("filterValue", e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchInput;
