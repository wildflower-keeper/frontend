"use client";

import React, { useEffect, useState } from "react";
import customAxios from "@/utils/api/axios";
import { formatDateTime } from "@/utils/date/date";
import { getCookie } from "@/utils/cookie";
import totalPagesMaker from "@/utils/pagenation";
import SearchInput, { filterValueType } from "./SearchInput";
import SearchSelector, { filterType } from "./SearchSelector";
import UserBoard, { userItemType } from "./UserBoard";
import PagenationButtonContainer from "./PagenationButtonContainer";

export type userItemListType = userItemType[];

type filterUserType = {
  filter: filterType;
  filterValue: filterValueType;
};

const UserBoardContainer = () => {
  const [filterUser, setFilterUser] = useState<filterUserType>({
    filter: "NONE",
    filterValue: "",
  });

  const [userItemList, setUserItemList] = useState<userItemListType>([]);

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number[]>([]);
  const fetchUser = async (pageNum: number) => {
    const url = `/api/v1/shelter-admin/homeless-people?filterType=${filterUser.filter}&filterValue=${filterUser.filterValue}&sleepoverTargetDate=${formatDateTime(new Date())}&pageNumber=${pageNum}&pageSize=6`;

    const res = await customAxios({
      url,
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
  const filterHandler = (value: filterType) => {
    setFilterUser({ ...filterUser, filter: value });
  };
  const filterValueHandler = (value: string) => {
    setFilterUser({ ...filterUser, filterValue: value });
  };
  const submitHandler = (pageNum: number) => {
    fetchUser(pageNum);
    setFilterUser({
      filter: "NONE",
      filterValue: "",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl">이용자 관리</p>
        <div className="flex gap-4">
          <SearchSelector onChange={filterHandler} value={filterUser.filter} />
          <SearchInput
            value={filterUser.filterValue}
            onChange={filterValueHandler}
            onSubmit={submitHandler}
          />
        </div>
      </div>
      <UserBoard userItemList={userItemList} />
      {userItemList.length ? (
        <PagenationButtonContainer
          pageNumberHandler={pageNumberHandler}
          totalPages={totalPages}
          pageNumber={pageNumber}
        />
      ) : null}
    </div>
  );
};

export default UserBoardContainer;
