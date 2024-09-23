"use client";

// Compo
import PagenationButtonContainer from "@/components/Composition/PagenationButtonContainer";
import SearchBar from "@/components/Composition/SearchBar";
import UserBoard from "@/components/List/UserBoard";
// Utils
import React, { useMemo, useState } from "react";
import { formatDateTime } from "@/utils/string/date";
import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { homelessPeopleList } from "@/api/v1/shelter-admin";
// Types
import type {
  FilterValuesType,
  HomelessPeopleListParam,
} from "@/api/v1/shelter-admin/type";

const UserBoardContainer = () => {
  const [param, setParam] = useState<HomelessPeopleListParam>({
    filterType: "NONE",
    filterValue: "",
    sleepoverTargetDate: formatDateTime(new Date()),
    pageNumber: 1,
    pageSize: 5,
  });

  const queryKey = useMemo(() => {
    return [...homelessPeopleList.queryKey(), Object.values(param)];
  }, [homelessPeopleList, param]);

  const { data: homelessPeopleListData } = useQuery({
    queryFn: () => homelessPeopleList(param),
    queryKey,
    refetchInterval: 60 * 1000,
  });

  const userItemList = useMemo(
    () => get(homelessPeopleListData, "items", []),
    [homelessPeopleListData],
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl">이용자 관리</p>
        <div className="flex gap-4">
          <SearchBar
            filterParamHandler={(pageNumber, { filterType, filterValue }) =>
              setParam((prev) => ({
                ...prev,
                filterType,
                filterValue,
                pageNumber,
              }))
            }
          />
        </div>
      </div>
      <UserBoard userItemList={userItemList} />
      <PagenationButtonContainer
        pageNumberHandler={(v) =>
          setParam((prev) => ({ ...prev, pageNumber: v }))
        }
        lastPageNumber={homelessPeopleListData?.pagination.lastPageNumber}
        pageNumber={param.pageNumber}
      />
    </div>
  );
};

export default UserBoardContainer;
