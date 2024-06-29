"use client";

import React, { useEffect, useState } from "react";
import customAxios from "@/utils/api/axios";
import { getCookie } from "@/utils/cookie";
import totalPagesMaker from "@/utils/pagenation";
import UserBoard, { sleepoverItemType } from "../UserBoardContainer/UserBoard";
import SearchInput from "../UserBoardContainer/SearchInput";
import SearchSelector from "../UserBoardContainer/SearchSelector";
import PagenationButtonContainer from "../UserBoardContainer/PagenationButtonContainer";

export type sleepoverListType = sleepoverItemType[];

const ManagementContainer = () => {
  const [sleepoverList, setSleepoverList] = useState<sleepoverListType>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number[]>([]);
  const fetchUser = async (pageNum: number) => {
    const res = await customAxios({
      url: `/api/v1/shelter-admin/sleepovers?pageNumber=${pageNum}&pageSize=6`,
      method: "GET",
      headers: {
        "auth-token": getCookie("authToken"),
      },
    });
    if (res.status === 200) {
      setSleepoverList([...res.data.items]);
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
    <div className="flex flex-col gap-4">
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
      <PagenationButtonContainer
        pageNumberHandler={pageNumberHandler}
        totalPages={totalPages}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default ManagementContainer;
