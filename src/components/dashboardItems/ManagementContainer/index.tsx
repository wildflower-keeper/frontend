"use client";

import React, { useEffect, useState } from "react";
import customAxios from "@/utils/api/axios";
import { getCookie } from "@/utils/cookie";
import UserBoard, { sleepoverItemType } from "../UserBoardContainer/UserBoard";
import SearchInput from "../UserBoardContainer/SearchInput";
import SearchSelector from "../UserBoardContainer/SearchSelector";

export type sleepoverListType = sleepoverItemType[];

const ManagementContainer = () => {
  const [sleepoverList, setSleepoverList] = useState<sleepoverListType>([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await customAxios({
        url: `/api/v1/shelter-admin/sleepovers?pageNumber=1&pageSize=7`,
        method: "GET",
        headers: {
          "auth-token": getCookie("authToken"),
        },
      });
      if (res.status === 200) {
        setSleepoverList([...res.data.items]);
      }
    };
    fetchUser();
  }, []);
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
        <UserBoard size="large" sleepoverList={sleepoverList} />
      </div>
    </div>
  );
};

export default ManagementContainer;
