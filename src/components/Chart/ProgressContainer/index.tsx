import React from "react";

const ProgressContainer = () => {
  return (
    <div>
      <div>
        <p>기타사유</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <div className=" w-36 bg-[#F5F5F5] rounded-lg h-fit my-auto">
            <div className=" h-4 w-24 bg-[#828282] rounded-lg">&nbsp;</div>
          </div>
          <div>
            <p className="text-base">개인사정</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" w-36 bg-[#F5F5F5] rounded-lg h-fit my-auto">
            <div className=" h-4 w-14 bg-[#828282] rounded-lg">&nbsp;</div>
          </div>
          <div>
            <p className="text-base">친구</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" w-36 bg-[#F5F5F5] rounded-lg h-fit my-auto">
            <div className=" h-4 w-16 bg-[#828282] rounded-lg">&nbsp;</div>
          </div>
          <div>
            <p className="text-base">친척</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" w-36 bg-[#F5F5F5] rounded-lg h-fit my-auto">
            <div className=" h-4 w-10 bg-[#828282] rounded-lg">&nbsp;</div>
          </div>
          <div>
            <p className="text-base">다른지역</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" w-36 bg-[#F5F5F5] rounded-lg h-fit my-auto">
            <div className=" h-4 w-6 bg-[#828282] rounded-lg">&nbsp;</div>
          </div>
          <div>
            <p className="text-base">부산 방문</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressContainer;
