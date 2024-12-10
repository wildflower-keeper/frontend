// Compo
import Sidebar from "@/components/Layout/AfterLoginLayouts/SideBar";
import { AdminInfomation } from "./layout.compo";
// Utils
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LoginedLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="flex w-full min-h-screen m-auto bg-neutral-50">
      <Sidebar />
      <div className="grow flex-col h-full">
        <AdminInfomation />
        <div className="border-b inset-0 border-solid border-neutral-200 w-full h-full" />
        <div className="grow h-full px-8 py-3 flex flex-col gap-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginedLayout;
