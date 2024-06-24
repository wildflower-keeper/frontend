"use client";

import React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const TinyLineChart = () => {
  return (
    <div className=" absolute w-96">
      <ChartContainer
        width={380}
        height={140}
        series={[{ type: "line", data: pData }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            stroke: "white",
            strokeWidth: 1,
          },
          [`& .${markElementClasses.root}`]: {
            stroke: "white",
            scale: "0.6",
            fill: "#98A4B9",
            strokeWidth: 2,
          },
        }}
        disableAxisListener
      >
        <LinePlot />
        <MarkPlot />
      </ChartContainer>
    </div>
  );
};

export default TinyLineChart;
