"use client";

// Compo
import Button from "@/components/base/Button";
import PagenationButtonContainer from "../../PagenationButtonContainer";
import UserBoard from "../../UserBoard";
// Utils
import React, { useEffect, useMemo, useState } from "react";
import totalPagesMaker from "@/utils/pagenation";
import { TbReportAnalytics } from "react-icons/tb";
import { addStatus } from "@/utils/sleepoverUtils";
import { get } from "lodash";
import { getSleepoverList } from "@/utils/api/v1/shelter-admin";
import { useQuery } from "@tanstack/react-query";
// Types

const ManagementContainer = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number[] | null>(null);

  const queryParams = useMemo(() => {
    return { pageNumber, pageSize: 5 };
  }, [pageNumber]);

  const { data: sleepoverListData } = useQuery({
    queryFn: () => getSleepoverList(queryParams),
    queryKey: getSleepoverList.queryKey(),
  });

  const addStatusSleepoverList = useMemo(() => {
    return addStatus(get(sleepoverListData, "items", []));
  }, [sleepoverListData]);

  useEffect(() => {
    const lastPage = get(sleepoverListData, "pagination.lastPageNumber", null);

    if (lastPage === null) return;

    setTotalPages(totalPagesMaker(lastPage));
  }, [sleepoverListData]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl">외박자 관리</p>
        <Button className="flex gap-2 border rounded-lg border-solid border-fontWeak px-10 py-2 items-center w-fit mr-3">
          <TbReportAnalytics size={24} color="#828282" />
          <span className="text-fontWeak">보고서 생성</span>
        </Button>
      </div>
      <div>
        <UserBoard size="large" sleepoverList={addStatusSleepoverList} />
      </div>
      {totalPages && (
        <PagenationButtonContainer
          pageNumberHandler={setPageNumber}
          totalPages={totalPages}
          pageNumber={pageNumber}
        />
      )}
    </div>
  );
};

export default ManagementContainer;
