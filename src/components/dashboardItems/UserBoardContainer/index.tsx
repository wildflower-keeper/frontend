"use client";

// Compo
import PagenationButtonContainer from "./PagenationButtonContainer";
import SearchBar from "./SearchBar";
import UserBoard from "./UserBoard";
// Utils
import React, { useMemo, useState } from "react";
import totalPagesMaker from "@/utils/pagenation";
import { formatDateTime } from "@/utils/date/date";
import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { homelessPeopleList } from "@/utils/api/v1/shelter-admin";
// Types
import type { FilterValuesType } from "@/types/type";

const UserBoardContainer = () => {
  const [param, setParam] = useState({
    filterType: "NONE",
    filterValue: "",
    sleepoverTargetDate: formatDateTime(new Date()),
    pageNumber: 1,
    pageSize: 5,
  });

  const { data: homelessPeopleListData } = useQuery({
    queryFn: () => homelessPeopleList(param),
    queryKey: homelessPeopleList.queryKey(),
  });

  const userItemList = useMemo(
    () => get(homelessPeopleListData, "items", []),
    [homelessPeopleListData],
  );

  const totalPages = useMemo(() => {
    const lastPage = get(
      homelessPeopleListData,
      "pagination.lastPageNumber",
      null,
    );

    if (lastPage === null) return [];

    return totalPagesMaker(lastPage);
  }, [homelessPeopleListData]);

  const filterParamHandler = (
    pageNum: number,
    { filter, filterValue }: FilterValuesType,
  ) =>
    setParam((prev) => ({
      ...prev,
      filterType: filter,
      filterValue,
      pageNumber: pageNum,
    }));

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl">이용자 관리</p>
        <div className="flex gap-4">
          <SearchBar filterParamHandler={filterParamHandler} />
        </div>
      </div>
      <UserBoard userItemList={userItemList} />
      <PagenationButtonContainer
        pageNumberHandler={(v) =>
          setParam((prev) => ({ ...prev, pageNumber: v }))
        }
        totalPages={totalPages}
        pageNumber={param.pageNumber}
      />
    </div>
  );
};

export default UserBoardContainer;
