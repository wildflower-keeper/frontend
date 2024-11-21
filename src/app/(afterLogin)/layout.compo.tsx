"use client";

// Compo
import AdminInfoContainer from "@/components/Composition/AdminInfo";
//
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

const ADMIN_INFOMATION_AVAILABLE_PATHS = [
  "/dashboard",
  "/notice",
  "/management",
  "/emergency",
];

export const AdminInfomation = () => {
  const pathname = usePathname();

  const isAvailableAdminInfo = useMemo(
    () => ADMIN_INFOMATION_AVAILABLE_PATHS.some((v) => v === pathname),
    [pathname],
  );
  return isAvailableAdminInfo ? <AdminInfoContainer /> : <></>;
};
