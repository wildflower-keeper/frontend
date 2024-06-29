"use client";

import React, { useEffect, useState } from "react";
import customAxios from "@/utils/api/axios";
import { formatDateTime } from "@/utils/date/date";
import { getCookie } from "@/utils/cookie";
import SearchInput from "./SearchInput";
import SearchSelector from "./SearchSelector";
import UserBoard, { userItemType } from "./UserBoard";

type UserBoardContainerType = {
  type?: "manageBoard" | "userSimpleBoard";
};

export type userItemListType = userItemType[];

const UserBoardContainer = ({
  type = "userSimpleBoard",
}: UserBoardContainerType) => {
  const [filter] = useState("NONE");
  const [userItemList, setUserItemList] = useState<userItemListType>([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await customAxios({
        url: `/api/v1/shelter-admin/homeless-people?filterType=${filter}&sleepoverTargetDate=${formatDateTime(new Date(), "simple")}&pageNumber=1&pageSize=7`,
        method: "GET",
        headers: {
          "auth-token": getCookie("authToken"),
        },
      });
      if (res.status === 200) {
        setUserItemList([...res.data.items]);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl">
          {type === "userSimpleBoard" ? "이용자 관리" : "외박자 관리"}
        </p>
        <div className="flex gap-4">
          <SearchSelector />
          <SearchInput />
        </div>
      </div>
      <UserBoard userItemList={userItemList} />
    </div>
  );
};

export default UserBoardContainer;
