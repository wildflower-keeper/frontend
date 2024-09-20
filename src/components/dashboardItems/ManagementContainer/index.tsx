"use client";

// Compo
import Button from "@/components/base/Button";
import PagenationButtonContainer from "../UserBoardContainer/PagenationButtonContainer";
import UserBoard from "../UserBoardContainer/UserBoard";
// Utils
import React, { useEffect, useMemo, useState } from "react";
import totalPagesMaker from "@/utils/pagenation";
import { TbReportAnalytics } from "react-icons/tb";
import { addStatus } from "@/utils/sleepoverUtils";
import { useGetSleepoverList } from "@/hooks/queries/v1/shelter-admin";
import { get } from "lodash";
// Types

const PAGE_SIZE = 5;

const ManagementContainer = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number[] | null>(null);

  const queryParams = useMemo(() => {
    return `pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`;
  }, [pageNumber]);

  const { data: sleepoverListData, isSuccess } =
    useGetSleepoverList(queryParams);

  const addStatusSleepoverList = useMemo(() => {
    return addStatus(get(sleepoverListData, "items", []));
  }, [sleepoverListData]);

  useEffect(() => {
    if (isSuccess) {
      const totalPageList = totalPagesMaker(
        sleepoverListData.pagination.lastPageNumber,
      );
      setTotalPages(totalPageList);
    }
  }, [isSuccess]);

  const pageNumberHandler = (pageNum: number) => {
    setPageNumber(pageNum);
  };
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
          pageNumberHandler={pageNumberHandler}
          totalPages={totalPages}
          pageNumber={pageNumber}
        />
      )}
    </div>
  );
};

export default ManagementContainer;
