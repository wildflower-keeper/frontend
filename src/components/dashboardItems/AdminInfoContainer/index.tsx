"use client";

import React, { useEffect, useState } from "react";
import customAxios from "@/utils/api/axios";
import { getCookie, removeCookie } from "@/utils/cookie";
import axios from "axios";
import PinNumberInfo from "./PinNumberInfo";
import ManagerInfo, { chiefOfficerType, dutyOfficerType } from "./ManagerInfo";
import DateInfo from "./DateInfo";
import useLoginStore from "@/store/useLogin";
import { redirect } from "next/navigation";

type adminInfoType = {
  shelterName: string;
  chiefOfficers: chiefOfficerType[];
  dutyOfficers: dutyOfficerType[];
};

const AdminInfoContainer = () => {
  const { isLogin, setIsLogin } = useLoginStore();
  const [adminInfo, setAdminInfo] = useState<adminInfoType>({
    shelterName: "",
    chiefOfficers: [
      {
        chiefOfficerId: 0,
        name: "",
        phoneNumber: "",
      },
    ],
    dutyOfficers: [
      {
        chiefOfficerId: 0,
        name: "",
        phoneNumber: "",
        targetDate: "",
      },
    ],
  });
  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const res = await customAxios({
          url: "/api/v1/shelter-admin/shelter",
          method: "GET",
          headers: {
            "auth-token": getCookie("authToken"),
          },
        });
        if (res.status === 200) {
          setAdminInfo({ ...res.data });
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 403) {
            removeCookie("authToken");
            setIsLogin(false);
          }
        }
      }
    };
    fetchAdminInfo();
  }, []);

  useEffect(() => {
    if (!isLogin && !getCookie("authToken")) {
      redirect("/auth");
    }
  }, [isLogin]);

  return (
    <div className="w-full flex justify-between">
      <DateInfo />
      <div className="flex items-center rounded-lg border border-dashed border-[#CCCCCC] px-5 py-4 justify-between gap-6">
        <PinNumberInfo shelterName={adminInfo.shelterName} />
        <ManagerInfo
          chiefOfficer={adminInfo.chiefOfficers[0]}
          dutyOfficer={adminInfo.dutyOfficers[0]}
        />
      </div>
    </div>
  );
};

export default AdminInfoContainer;
