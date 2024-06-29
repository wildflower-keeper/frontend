/* eslint-disable import/no-cycle */

"use client";

import React, { useEffect, useState } from "react";
import customAxios from "@/utils/api/axios";
import { getCookie, removeCookie } from "@/utils/cookie";
import axios from "axios";
import PinNumberInfo from "./PinNumberInfo";
import ManagerInfo from "./ManagerInfo";
import DateInfo from "./DateInfo";

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
            removeCookie("authToken");
          }
        }
      }
    };
    fetchAdminInfo();
  }, []);

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
