import React from "react";
import DateInfo from "./DateInfo";
import ManagerInfo from "./ManagerInfo";

const AdminInfoContainer = () => {
  return (
    <div className="w-full flex justify-between">
      <DateInfo />
      <ManagerInfo />
    </div>
  );
};

export default AdminInfoContainer;
