// Compo
import UserCurrentSituation from "@/components/Layout/UserCurrentSituation";
import UserBoardContainer from "@/components/Layout/UserBoardContainer";
// Utils
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-7">
        <UserCurrentSituation />
      </div>
      <UserBoardContainer />
    </div>
  );
};

export default Page;
