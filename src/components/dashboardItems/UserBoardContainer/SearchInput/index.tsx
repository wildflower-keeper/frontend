import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <div className="bg-white flex justify-center items-center px-3 py-2 w-auto rounded-lg gap-3">
      <Button className="m-auto">
        <FiSearch
          size={22}
          color="#828282
"
        />
      </Button>
      <Input placeholder="검색" className=" w-28 placeholder:text-fontWeak" />
    </div>
  );
};

export default SearchInput;
