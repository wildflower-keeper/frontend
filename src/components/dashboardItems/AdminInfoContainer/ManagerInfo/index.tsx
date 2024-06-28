import React from "react";

const ManagerInfo = () => {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex gap-2">
        <span className="font-semibold">책임자</span>
        <span>○○○</span>
        <span className="text-fontWeak">010-3333-4444</span>
      </div>
      <div className="flex gap-2">
        <span className="font-semibold">당직자</span>
        <span>○○○</span>
        <span className="text-fontWeak">010-5555-6666</span>
      </div>
    </div>
  );
};

export default ManagerInfo;
