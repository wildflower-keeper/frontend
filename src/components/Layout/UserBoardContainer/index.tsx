"use client";

// Compo
import PagenationButtonContainer from "@/components/Composition/PagenationButtonContainer";
import SearchBar from "@/components/Composition/SearchBar";
import UserBoard from "@/components/List/UserBoard";
// Utils
import React, { useEffect, useMemo, useState } from "react";
import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { homelessPeopleList } from "@/api/v1/shelter-admin";
import { simpleGenerateSecond } from "@/utils/number/time";
// Types
import type { HomelessPeopleListParam } from "@/api/v1/shelter-admin/type";
import UserManagementButtonContainer from "@/components/Composition/UserManagementButtonContainer";
import AddUserModal from "@/components/Composition/AddUserModal";
import useHomelessListQueryKey from "@/store/useHomelessListQueryKey";

const UserBoardContainer = () => {
  const [param, setParam] = useState<HomelessPeopleListParam>({
    filterType: "NONE",
    filterValue: "",
    sleepoverTargetDate: new Date().toISOString(),
    pageNumber: 1,
    pageSize: 5,
  });
  const { setHomelessListQueryKey } = useHomelessListQueryKey();

  const queryKey = useMemo(() => {
    const queryKey = [...homelessPeopleList.queryKey(), ...Object.values(param)];
    return queryKey;
  }, [homelessPeopleList, param]);

  useEffect(() => {
    setHomelessListQueryKey(queryKey);
  }, queryKey);

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
            submitHandler={(filters, page) => {
              setParam((prev) => ({ ...prev, ...filters, pageNumber: page }));
            }}
          />
        </div>
      </div>
      <UserBoard userItemList={userItemList} />
      <AddUserModal />
      <div className="flex flex-row items-center">
        <UserManagementButtonContainer />
        <PagenationButtonContainer
          pageNumberHandler={(v) =>
            setParam((prev) => ({ ...prev, pageNumber: v }))
          }
          lastPageNumber={homelessPeopleListData?.pagination.lastPageNumber}
          pageNumber={param.pageNumber}
        />
      </div>
    </div>
  );
};

export default UserBoardContainer;
