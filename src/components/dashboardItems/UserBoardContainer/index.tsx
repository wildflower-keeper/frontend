import React from "react";
import UserBoard from "./UserBoard";
import SearchInput from "./SearchInput";
import SearchSelector from "./SearchSelector";

const UserBoardContainer = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl">이용자 관리</p>
        <div className="flex gap-4">
          <SearchSelector />
          <SearchInput />
        </div>
      </div>
      <UserBoard />
    </div>
  );
};

export default UserBoardContainer;
