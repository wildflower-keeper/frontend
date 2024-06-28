import React from "react";
import UserBoard from "../UserBoardContainer/UserBoard";
import SearchInput from "../UserBoardContainer/SearchInput";
import SearchSelector from "../UserBoardContainer/SearchSelector";

const ManagementContainer = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl">외박자 관리</p>
        <div className="flex gap-4">
          <SearchSelector />
          <SearchInput />
        </div>
      </div>
      <div>
        <UserBoard size="large" />
      </div>
    </div>
  );
};

export default ManagementContainer;
