"use client";

import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const PieChartContainer = () => {
  return (
    <div className="flex flex-col gap-1 w-fit">
      <div>
        <p className="text-fontWeak text-center">2024년 5월 집계</p>
      </div>
      <div>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 8, label: "가족", color: "#04C066" },
                { id: 1, value: 18, label: "모임", color: "#8C7CFF" },
                { id: 2, value: 7, label: "일", color: "#FFC200" },
                { id: 3, value: 6, label: "기타", color: "#FF6838" },
              ],
              innerRadius: 55,
              outerRadius: 75,
              paddingAngle: 3,
              cornerRadius: 5,
              startAngle: -180,
              endAngle: 180,
              cx: 110,
              cy: 70,
            },
          ]}
          width={230}
          height={180}
          slotProps={{
            legend: {
              direction: "row",
              position: { vertical: "bottom", horizontal: "right" },
              padding: 0,
              itemMarkWidth: 10,
              itemMarkHeight: 10,
              markGap: 8,
              labelStyle: {
                fontSize: 14,
                fill: "#353535",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default PieChartContainer;
