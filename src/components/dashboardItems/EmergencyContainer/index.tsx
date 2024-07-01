import Maps from "@/components/Map";
import React from "react";

const EmergencyContainer = () => {
  return (
    <div className="flex flex-col gap-9">
      <div>
        <p className=" font-semibold text-xl">긴급상황 발생내역</p>
      </div>
      <div className="flex w-full justify-between">
        <div>
          <div>
            <div className="grid grid-cols-3 w-[500px] rounded-lg pr-8 py-3">
              <div>
                <p className="text-center">이름</p>
              </div>

              <div>
                <p className="text-center">전화번호</p>
              </div>
              <div>
                <p className="text-center">발생 시간</p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 w-[500px] bg-white rounded-lg pr-8 py-3">
              <div>
                <p className="text-center">원순철</p>
              </div>
              <div>
                <p className="text-center">010-2853-8274</p>
              </div>
              <div>
                <p className="text-center">2024.06.22 23:31</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg flex flex-col gap-3">
          <Maps />
          <div>
            <p className=" text-right px-2">서울역 약500m 근처 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContainer;
