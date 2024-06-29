/* eslint-disable import/no-cycle */

"use client";

import React, { useEffect, useState } from "react";
import customAxios from "@/utils/api/axios";
import { getCookie, removeCookie } from "@/utils/cookie";
import axios from "axios";
import PinNumberInfo from "./PinNumberInfo";
import ManagerInfo from "./ManagerInfo";
import DateInfo from "./DateInfo";
import useLoginStore from "@/store/useLogin";
import { redirect } from "next/navigation";

export type chiefOfficersType = {
  chiefOfficerId: number;
  name: string;
  phoneNumber: string;
};

export type dutyOfficersType = chiefOfficersType & { targetDate: string };

type adminInfoType = {
  shelterName: string;
  chiefOfficers: chiefOfficersType;
  dutyOfficers: dutyOfficersType;
};

const AdminInfoContainer = () => {
  const { isLogin, setIsLogin } = useLoginStore();
  const [adminInfo, setAdminInfo] = useState<adminInfoType>({
    shelterName: "",
    chiefOfficers: {
      chiefOfficerId: 0,
      name: "",
      phoneNumber: "",
    },
    dutyOfficers: {
      chiefOfficerId: 0,
      name: "",
      phoneNumber: "",
      targetDate: "",
    },
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
            console.log(error);
            removeCookie("authToken");
            setIsLogin(false);
          }
        }
      }
    };
    fetchAdminInfo();
  }, []);

  useEffect(() => {
    if (!isLogin) {
      redirect("/auth");
    }
  }, [isLogin]);

  return (
    <div className="w-full flex justify-between">
      <DateInfo />
      <div className="flex min-w-96 items-center rounded-lg border border-dashed border-[#CCCCCC] px-5 py-4 justify-between">
        <PinNumberInfo shelterName={adminInfo.shelterName} />
        <ManagerInfo
          chiefOfficers={adminInfo.chiefOfficers}
          dutyOfficers={adminInfo.dutyOfficers}
        />
      </div>
    </div>
  );
};

export default AdminInfoContainer;
