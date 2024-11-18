"use client";
// Compo
import PagenationButtonContainer from "@/components/Composition/PagenationButtonContainer";
import SearchBar from "@/components/Composition/SearchBar";
import UserBoard from "@/components/List/UserBoard";
import StatusFilter from "@/components/Composition/UserListFilter";
// Utils
import React, { useMemo, useState } from "react";
import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { homelessPeopleList } from "@/api/v1/shelter-admin";
import { simpleGenerateSecond } from "@/utils/number/time";
import UserManagementProvider from "../UserManagementProvider";

// Types
import type { HomelessPeopleListParam, UserItemType } from "@/api/v1/shelter-admin/type";
import UserManagementButtonContainer from "@/components/Composition/UserManagementButtonContainer";
import AddUserModal from "@/components/Composition/AddUserModal";

const UserBoardContainer = () => {
  const [param, setParam] = useState<HomelessPeopleListParam>({
    filterType: "NAME",
    filterValue: "",
    sleepoverTargetDate: new Date().toISOString(),
    pageNumber: 1,
    pageSize: 5,
  });
  const queryKey = useMemo(() => {
    const queryKey = [...homelessPeopleList.queryKey(), ...Object.values(param)];
    return queryKey;
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
    <div className="w-full h-full">
      <UserManagementProvider>
        <div className="custom-page-name">이용자 관리</div>
        <div className="flex gap-4 justify-between items-center mb-2">
          <StatusFilter 
          filterHandler={(status, filterType) => setParam((prev) => ({
            ...prev, status, filterType
          }))} 
          />
          <div className="flex items-center relative">
            <UserManagementButtonContainer />
            <SearchBar
              submitHandler={(filters, page) => {
                setParam((prev) => ({ ...prev, ...filters, pageNumber: page }));
              }}
            />
            <AddUserModal />
          </div>
        </div>
        <UserBoard userItemList={userItemList} />
        <div className="flex flex-row justify-center">
          <PagenationButtonContainer
            pageNumberHandler={(v) =>
              setParam((prev) => ({ ...prev, pageNumber: v }))
            }
            lastPageNumber={homelessPeopleListData?.pagination.lastPageNumber}
            pageNumber={param.pageNumber}
          />
        </div>
      </UserManagementProvider>
    </div>
  );
};
export default UserBoardContainer;