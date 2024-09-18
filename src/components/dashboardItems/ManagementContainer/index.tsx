"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import totalPagesMaker from "@/utils/pagenation";
import { TbReportAnalytics } from "react-icons/tb";
import Button from "@/components/base/Button";
import PagenationButtonContainer from "../UserBoardContainer/PagenationButtonContainer";
import UserBoard from "../UserBoardContainer/UserBoard";
import { addStatus } from "@/utils/sleepoverUtils";

//Types
import { SleepoverItemType } from "@/utils/api/v1/shelter-admin/type";
import { getSleepoverList } from "@/utils/api/v1/shelter-admin";

const ManagementContainer = () => {
  //fetching data
  const [sleepoverList, setSleepoverList] = useState<SleepoverItemType[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number[] | null>(null);

  const fetchData = useCallback(
    (pageNum: number) => {
      const queryParams = `pageNumber=${pageNum}&pageSize=2`;
      getSleepoverList(queryParams).then((res) => {
        setSleepoverList(res.items);

        setTotalPages(totalPagesMaker(res.pagination.lastPageNumber));
      });
    },
    [pageNumber],
  );

  const addStatusSleepoverList = useMemo(() => {
    return addStatus(sleepoverList);
  }, [sleepoverList]);

  useEffect(() => {
    fetchData(pageNumber);
  }, [pageNumber]);

  const pageNumberHandler = (pageNum: number) => {
    setPageNumber(pageNum);
    fetchData(pageNum);
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
