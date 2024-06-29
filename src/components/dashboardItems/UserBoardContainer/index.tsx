"use client";

import React, { useEffect, useState } from "react";
import customAxios from "@/utils/api/axios";
import { formatDateTime } from "@/utils/date/date";
import { getCookie } from "@/utils/cookie";
import totalPagesMaker from "@/utils/pagenation";
import SearchInput from "./SearchInput";
import SearchSelector from "./SearchSelector";
import UserBoard, { userItemType } from "./UserBoard";
import PagenationButtonContainer from "./PagenationButtonContainer";

export type userItemListType = userItemType[];

const UserBoardContainer = () => {
  const [filter] = useState("NONE");
  const [userItemList, setUserItemList] = useState<userItemListType>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number[]>([]);
  const fetchUser = async (pageNum: number) => {
    const res = await customAxios({
      url: `/api/v1/shelter-admin/homeless-people?filterType=${filter}&sleepoverTargetDate=${formatDateTime(new Date(), "simple")}&pageNumber=${pageNum}&pageSize=6`,
      method: "GET",
      headers: {
        "auth-token": getCookie("authToken"),
      },
    });
    if (res.status === 200) {
      setUserItemList([...res.data.items]);
      setTotalPages(totalPagesMaker(res.data.pagination.lastPageNumber));
    }
  };
  useEffect(() => {
    fetchUser(pageNumber);
  }, []);

  const pageNumberHandler = (pageNum: number) => {
    setPageNumber(pageNum);
    fetchUser(pageNum);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl">이용자 관리</p>
        <div className="flex gap-4">
          <SearchSelector />
          <SearchInput />
        </div>
      </div>
      <UserBoard userItemList={userItemList} />
      <PagenationButtonContainer
        pageNumberHandler={pageNumberHandler}
        totalPages={totalPages}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default UserBoardContainer;
