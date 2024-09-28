"use client";

// Compo
import PagenationButtonContainer from "@/components/Composition/PagenationButtonContainer";
import SearchBar from "@/components/Composition/SearchBar";
import UserBoard from "@/components/List/UserBoard";
// Utils
import React, { useMemo, useState } from "react";
import { get } from "lodash";
import { useSearch } from "@/hooks/useSearch";
import { useQuery } from "@tanstack/react-query";
import { homelessPeopleList } from "@/api/v1/shelter-admin";
import { simpleGenerateSecond } from "@/utils/number/time";
// Types
import type { HomelessPeopleListParam } from "@/api/v1/shelter-admin/type";

const UserBoardContainer = () => {
  const [param, setParam] = useState<HomelessPeopleListParam>({
    filterType: "NONE",
    filterValue: "",
    sleepoverTargetDate: new Date().toISOString(),
    pageNumber: 1,
    pageSize: 5,
  });

  const { filterValues, filterHandler, isSubmitDisabled } = useSearch();

  const queryKey = useMemo(() => {
    return [...homelessPeopleList.queryKey(), ...Object.values(param)];
  }, [homelessPeopleList, param]);

  const { data: homelessPeopleListData } = useQuery({
    queryFn: () => homelessPeopleList(param),
    queryKey,
    refetchInterval: simpleGenerateSecond([[3, "m"]]),
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
            filterValues={filterValues}
            filterHandler={filterHandler}
            isSubmitDisabled={isSubmitDisabled}
            submitHandler={() => {
              setParam((prev) => ({ ...prev, ...filterValues }));
            }}
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
