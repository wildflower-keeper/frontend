"use client";

import React, { useEffect, useState } from "react";
import customAxios from "@/utils/api/axios";
import { getCookie } from "@/utils/cookie";
import totalPagesMaker from "@/utils/pagenation";
import { TbReportAnalytics } from "react-icons/tb";
import Button from "@/components/base/Button";
import { dateComparison } from "@/utils/date/date";
import PagenationButtonContainer from "../UserBoardContainer/PagenationButtonContainer";
import UserBoard, { sleepoverItemType } from "../UserBoardContainer/UserBoard";

export type sleepoverListType = sleepoverItemType[];

const ManagementContainer = () => {
  const [sleepoverList, setSleepoverList] = useState<sleepoverListType>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number[]>([]);
  const fetchUser = async (pageNum: number) => {
    const res = await customAxios({
      url: `/api/v1/shelter-admin/sleepovers?pageNumber=${pageNum}&pageSize=6`,
      method: "GET",
      headers: {
        "auth-token": getCookie("authToken"),
      },
    });
    console.log(res);
    if (res.status === 200) {
      if (res.data.items) {
        const addStatus = res.data.items.map((item: sleepoverItemType) => {
          const sleepoverSituation = dateComparison(
            new Date(item.startDate),
            new Date(item.endDate),
          );
          return { ...item, sleepoverSituation };
        });
        setSleepoverList([...addStatus]);
      }
      if (!res.data.items) {
        setSleepoverList([]);
      }
      setTotalPages(totalPagesMaker(res.data.pagination.lastPageNumber));
    }
  };
  useEffect(() => {
    fetchUser(pageNumber);
  }, []);

  const pageNumberHandler = (pageNum: number) => {
    setPageNumber(pageNum);
    fetchUser(pageNum);
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
        <UserBoard size="large" sleepoverList={sleepoverList} />
      </div>
      <PagenationButtonContainer
        pageNumberHandler={pageNumberHandler}
        totalPages={totalPages}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default ManagementContainer;
