"use client";

import Button from "@/components/base/Button";
import useDashboardStore from "@/store/useDashboard";
import useLoginStore from "@/store/useLogin";
import customAxios from "@/utils/api/axios";
import { getCookie, removeCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";

const headerName = {
  dashboard: "대시보드",
  management: "외박 신청 내역",
  emergency: "긴급 상황 내역",
};

const DashboardHeader = () => {
  const router = useRouter();
  const { dashboard } = useDashboardStore();
  const { setIsLogin } = useLoginStore();

  const handleLogout = async () => {
    const logoutUrl = "/api/v1/shelter-admin/logout";
    try {
      const res = await customAxios({
        method: "POST",
        url: logoutUrl,
        headers: {
          "auth-token": getCookie("authToken"),
          Accept: "*/*",
        },
      });
      if (res.status === 200) {
        removeCookie("authToken");
        setIsLogin(false);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
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
