"use client";

// Compo
import Image from "next/image";
import Header from "@/components/dashboardItems/DashboardHeader";
import Sidebar from "@/components/dashboardItems/DashboardSideBar";
import AdminInfoContainer from "@/components/dashboardItems/AdminInfoContainer";
// Utils
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { ADMIN_INFOMATION_AVAILABLE_PATHS } from "./layouts.const";
import useLoginStore from "@/store/useLogin";

export const LoginedLayout: React.FC<Props> = ({ children }: Props) => {
  const pathname = usePathname();

  const isAvailableAdminInfo = useMemo(
    () => ADMIN_INFOMATION_AVAILABLE_PATHS.some((v) => v === pathname),
    [pathname],
  );

  return (
    <div className="flex w-full min-h-screen m-auto bg-dashboardBackgroundColor">
      <Sidebar />
      <div className="grow flex-col h-full">
        <Header />
        <div className="grow h-full px-16 py-5 flex flex-col gap-8">
          {isAvailableAdminInfo && <AdminInfoContainer />}
          {children}
        </div>
      </div>
    </div>
  );
};

interface Props {
  children: ReactNode;
}

export const NotLoginedLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex-grow flex flex-col gap-12">
      <div>
        <div className="w-40 h-10 m-3">
          <Image
            key={1}
            src="/assets/logos/wildflower_logo_with_name.png"
            width={150}
            height={40}
            alt="로고"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export const LayoutSelector = ({
  children,
  initialLogin,
}: { initialLogin: boolean } & Props) => {
  const [mounted, setMounted] = useState(false);
  const { isLogin } = useLoginStore();

  useEffect(() => setMounted(true), []);

  const CurrentLayoutComponent = useMemo(() => {
    return isLogin ? LoginedLayout : NotLoginedLayout;
  }, [isLogin]);

  if (!mounted) {
    const CurrentLayoutComponent = initialLogin
      ? LoginedLayout
      : NotLoginedLayout;
    return <CurrentLayoutComponent>{children}</CurrentLayoutComponent>;
  }

  return <CurrentLayoutComponent>{children}</CurrentLayoutComponent>;
};
