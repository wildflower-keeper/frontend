"use client";

import React from "react";
// Compo
import Button from "@/components/base/Button";
import { AiOutlineReload } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
// Utils
import useDashboardStore from "@/store/useDashboard";
import { removeCookie } from "@/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/utils/api/v1/shelter-admin";

const headerName = {
  dashboard: "대시보드",
  management: "외박 신청 내역",
  emergency: "긴급 상황 내역",
};

const DashboardHeader = () => {
  const { mutate } = useMutation({
    mutationKey: logout.mutationKey(),
    mutationFn: logout,
  });
  const { dashboard } = useDashboardStore();

  const handleLogout = () => {
    mutate(undefined, {
      onSuccess: () => {
        removeCookie("authToken");
        window.location.href = "/auth";
      },
      onError: (error) => {
        return error;
      },
    });
  };

  return (
    <div className="px-10 flex justify-between h-20 items-center rounded-br-xl border bg-white">
      <p className="text-2xl font-bold">{headerName[dashboard]}</p>
      <div className="flex gap-7">
        <Button className="w-12 h-12 bg border rounded-lg">
          <AiOutlineReload size={24} color="#828282" className="m-auto" />
        </Button>
        <Button
          className="w-12 h-12 bg border rounded-lg"
          onClick={handleLogout}
        >
          <MdOutlineLogout size={26} color="#828282" className="m-auto" />
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
