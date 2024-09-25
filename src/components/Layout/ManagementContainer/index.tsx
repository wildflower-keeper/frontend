"use client";

// Compo
import PagenationButtonContainer from "@/components/Composition/PagenationButtonContainer";
import UserBoard from "@/components/List/UserBoard";
// Utils
import React, { useMemo, useState } from "react";
import { addStatus } from "@/utils/sleepoverUtils";
import { get } from "lodash";
import { getSleepoverList } from "@/api/v1/shelter-admin";
import { useQuery } from "@tanstack/react-query";
// Types
import type { GetSleepoverListParam } from "@/api/v1/shelter-admin/type";

const ManagementContainer = () => {
  const [param, setParam] = useState<GetSleepoverListParam>({
    pageNumber: 1,
    pageSize: 5,
  });

  const queryKey = useMemo(() => {
    return [...getSleepoverList.queryKey(), Object.values(param)];
  }, [getSleepoverList, param]);

  const { data: sleepoverListData } = useQuery({
    queryFn: () => getSleepoverList(param),
    queryKey,
  });

  const addStatusSleepoverList = useMemo(() => {
    return addStatus(get(sleepoverListData, "items", []));
  }, [sleepoverListData]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl">외박자 관리</p>
        {/* <Button className="flex gap-2 border rounded-lg border-solid border-fontWeak px-10 py-2 items-center w-fit mr-3">
          <TbReportAnalytics size={24} color="#828282" />
          <span className="text-fontWeak">보고서 생성</span>
        </Button> */}
      </div>
      <div>
        <UserBoard size="large" sleepoverList={addStatusSleepoverList} />
      </div>
      <PagenationButtonContainer
        pageNumberHandler={(v: number) =>
          setParam((prev) => ({ ...prev, pageNumber: v }))
        }
        lastPageNumber={sleepoverListData?.pagination.lastPageNumber}
        pageNumber={param.pageNumber}
      />
    </div>
  );
};

export default ManagementContainer;
