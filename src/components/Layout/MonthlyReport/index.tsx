"use client";

import Button from "@/components/base/Button";
import React from "react";
import { TbReportAnalytics } from "react-icons/tb";
import excelDownloader from "@/utils/excel";
import ProgressContainer from "./items/ProgressContainer";
import PieChartContainer from "./items/PieChartContainer";

const MonthlyReport = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-xl">월간 누적 보고서</p>
      <div className="flex flex-col gap-4 bg-white rounded-lg py-4">
        <div className="flex gap-2">
          <PieChartContainer />
          <ProgressContainer />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <Button
            className="flex gap-2 border rounded-lg border-solid border-borderDefault px-2
             py-1 items-center w-fit"
            onClick={excelDownloader}
          >
            <TbReportAnalytics size={24} color="#828282" />

            <span className="text-fontWeak text-base">보고서 생성</span>
          </Button>
          <p className="text-fontWeak text-sm">
            위 통계 데이터는 .CSV 확장자 파일로 내려받기가 가능합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReport;
