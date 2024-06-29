import React from "react";
import { MdOutlineFilterList } from "react-icons/md";

const SearchSelector = () => {
  return (
    <div className="flex justify-center items-center py-2 px-3 bg-white rounded-lg gap-2">
      <MdOutlineFilterList size={22} color="#828282" />
      <select className="py-1" required>
        <option value="" disabled selected>
          필터
        </option>
        <option>상태</option>
        <option>이름</option>
        <option>호실</option>
        <option>전화번호</option>
      </select>
    </div>
  );
};

export default SearchSelector;
