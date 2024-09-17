"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { formatDateTime } from "@/utils/date/date";
import totalPagesMaker from "@/utils/pagenation";
import UserBoard from "./UserBoard";
import PagenationButtonContainer from "./PagenationButtonContainer";
import { homelessPeopleList } from "@/utils/api/v1/shelter-admin";
//Types
import type { UserItemType } from "@/utils/api/v1/shelter-admin/type";
import type { FilterValuesType } from "@/types/type";
import SearchBar from "./SearchBar";

const UserBoardContainer = () => {
  //fetchDataFilter
  const [filterParams, setFilterParams] = useState<FilterValuesType>({
    filter: "NONE",
    filterValue: "",
  });
  //userItems;
  const [userItemList, setUserItemList] = useState<UserItemType[]>([]);
  // pagenation
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number[] | null>(null);
  // prevDateValidation
  const prevDataRef = useRef<UserItemType[] | null>(null);

  const fetchUserList = useCallback(
    (pageNum: number) => {
      const queryParams = `filterType=${filterParams.filter}&filterValue=${filterParams.filterValue}&sleepoverTargetDate=${formatDateTime(new Date())}&pageNumber=${pageNum}&pageSize=5`;
      homelessPeopleList(queryParams).then((res) => {
        if (JSON.stringify(res.items) !== JSON.stringify(prevDataRef)) {
          setUserItemList(res.items);
          prevDataRef.current = res.items;
          setTotalPages(totalPagesMaker(res.pagination.lastPageNumber));
        }
      });
    },
    [pageNumber, filterParams],
  );

  useEffect(() => {
    fetchUserList(pageNumber);
    const interval = setInterval(() => {
      fetchUserList(pageNumber);
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, [pageNumber, filterParams]);

  const pageNumberHandler = (pageNum: number) => {
    setPageNumber(pageNum);
  };

  const filterParamHandler = (
    pageNum: number,
    filterValues: FilterValuesType,
  ) => {
    setFilterParams((prev) => ({ ...prev, ...filterValues }));
    setPageNumber(pageNum);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl">이용자 관리</p>
        <div className="flex gap-4">
          <SearchBar filterParamHandler={filterParamHandler} />
        </div>
      </div>
      <UserBoard userItemList={userItemList} />
      {totalPages && (
        <PagenationButtonContainer
          pageNumberHandler={pageNumberHandler}
          totalPages={totalPages}
          pageNumber={pageNumber}
        />
      )}
    </div>
  );
};

export default UserBoardContainer;
