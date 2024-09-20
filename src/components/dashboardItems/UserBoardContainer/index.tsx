"use client";

// Compo
import PagenationButtonContainer from "./PagenationButtonContainer";
import SearchBar from "./SearchBar";
import UserBoard from "./UserBoard";
// Utils
import React, { useEffect, useMemo, useState } from "react";
import { formatDateTime } from "@/utils/date/date";
import totalPagesMaker from "@/utils/pagenation";
import { useHomelessPeopleList } from "@/hooks/queries/v1/shelter-admin";
import { get } from "lodash";
// Types
import type { FilterValuesType } from "@/types/type";

const PAGE_SIZE = 5;

const TARGET_DATE = formatDateTime(new Date());

const UserBoardContainer = () => {
  // fetchDataFilter
  const [filterParams, setFilterParams] = useState<FilterValuesType>({
    filter: "NONE",
    filterValue: "",
  });

  // pagenation
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number[] | null>(null);

  const queryParams = useMemo(() => {
    return `filterType=${filterParams.filter}&filterValue=${filterParams.filterValue}&sleepoverTargetDate=${TARGET_DATE}&pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`;
  }, [pageNumber, filterParams]);

  // userItems
  const { data: homelessPeopleListData, isSuccess } =
    useHomelessPeopleList(queryParams);

  const userItemList = useMemo(() => {
    return get(homelessPeopleListData, "items", []);
  }, [homelessPeopleListData]);

  useEffect(() => {
    if (isSuccess) {
      const totalPageList = totalPagesMaker(
        homelessPeopleListData.pagination.lastPageNumber,
      );
      setTotalPages(totalPageList);
    }
  }, [homelessPeopleListData]);

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
