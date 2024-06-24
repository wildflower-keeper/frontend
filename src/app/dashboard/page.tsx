"use client";

import CustomTable from "@/components/CustomTable";
import Button from "@/components/base/Button";
import Header from "@/components/base/Header";
import GraphCard from "@/components/card/GraphCard";
import React from "react";

const testArr = [1, 2, 3, 4];

const graphObjArr = [
  {
    title: "재실",
    description: "현재 센터 내 이용자",
    personnel: 100,
    graphType: "gauge",
  },
  {
    title: "외출",
    description: "외출 중인 이용자",
    personnel: 6,
    graphType: "line",
  },
  {
    title: "외박",
    description: "외박 중인 이용자",
    personnel: 9,
    graphType: "line",
  },
  {
    title: "미복귀자",
    description: "외박 기간을 넘긴 이용자",
    personnel: 1,
    graphType: "line",
  },
];

const Dashboard = () => {
  return (
    <>
      <Header>
        <div className="flex flex-grow-0 justify-between mx-10 h-20 items-center">
          <div>
            <h1>비전트레이닝센터</h1>
          </div>
          <div>
            {testArr.map((val) => {
              return <Button key={val}>{val}</Button>;
            })}
          </div>
        </div>
      </Header>
      <section className="grow bg-dashboardBackgroundColor">
        <div>
          <div>대시보드 헤더</div>
          <div className="w-full flex justify-evenly">
            {graphObjArr?.map(
              ({ title, description, personnel, graphType }) => {
                return (
                  <GraphCard
                    key={title}
                    title={title}
                    description={description}
                    personnel={personnel}
                    graphType={graphType}
                  />
                );
              },
            )}
          </div>
        </div>
        <div className="flex">
          <div>
            <div>이용자 현황</div>
            <CustomTable />
          </div>
          <div>주간 리포트</div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
