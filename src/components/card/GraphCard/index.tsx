import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import TinyLineChart from "@/components/TinyLineChart";

type graphCardType = {
  title: string;
  personnel: number;
  description: string;
  graphType: "gauge" | "line";
};

const GraphCard = ({
  title,
  personnel,
  description,
  graphType,
}: graphCardType) => {
  return (
    <div className=" bg-graphCardBackgroundColor w-72 h-auto rounded-lg text-white py-5 shadow-lg flex flex-col">
      <div className="px-8 flex-grow-0">
        <p>{title}</p>
      </div>
      <div className="grow flex justify-center items-center relative">
        {graphType === "line" ? (
          <TinyLineChart />
        ) : (
          <Gauge
            width={240}
            height={120}
            value={60}
            startAngle={-90}
            endAngle={90}
            sx={() => {
              return {
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 40,
                  transform: "translate(0px, -20px)",
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: "#999999",
                },
              };
            }}
          />
        )}
      </div>
      <div className="px-8 flex-grow-0 text-5xl">{personnel}</div>
      <div className="px-8 flex-grow-0">{description}</div>
    </div>
  );
};

export default GraphCard;
