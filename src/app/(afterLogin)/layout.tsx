// Compo
import Header from "@/components/Layout/AfterLoginLoyouts/Header";
import Sidebar from "@/components/Layout/AfterLoginLoyouts/SideBar";
import { AdminInfomation } from "./layout.compo";
// Utils
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LoginedLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="flex w-full min-h-screen m-auto bg-dashboardBackgroundColor">
      <Sidebar />
      <div className="grow flex-col h-full">
        <Header />
        <div className="grow h-full px-16 py-5 flex flex-col gap-8">
          <AdminInfomation />
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginedLayout;
