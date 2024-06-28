"use client";

import InputWithLabel from "@/components/InputWithLabel";
import Button from "@/components/base/Button";
// import customAxios from "@/utils/api/axios";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

type shelterType = {
  shelterId: number;
  shelterName: string;
};

type LoginFormType = {
  shelters: shelterType[];
};

type loginInfoType = {
  shelterId: string;
  password: string;
};

const LoginForm = ({ shelters }: LoginFormType) => {
  const [loginInfo, setLoginInfo] = useState<loginInfoType>({
    shelterId: "",
    password: "password_example",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
  };
  const handleShelterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoginInfo({ ...loginInfo, shelterId: e.target.value });
  };

  // const handleLoginSubmit = async () => {
  //   try {
  //     const submitData = {
  //       ...loginInfo,
  //       shelterId: parseInt(loginInfo.shelterId, 10),
  //     };
  //     const res = await customAxios({
  //       method: "POST",
  //       url: "/api/v1/shelter-admin/login",
  //       data: JSON.stringify(submitData),
  //     });
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  return (
    <div className="w-80">
      <form
        className="flex flex-col gap-14"
        onSubmit={(e) => {
          return e.preventDefault();
        }}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="centerSelector" className="smallFont">
              센터명
            </label>
            <select
              id="centerSelector"
              className="py-1"
              onChange={handleShelterChange}
              value={loginInfo.shelterId}
              required
            >
              <option value="" disabled selected>
                센터를 선택해주세요.
              </option>
              {shelters?.map(({ shelterId, shelterName }) => {
                return (
                  <option key={shelterId} value={shelterId}>
                    {shelterName}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <InputWithLabel
              value={loginInfo.password}
              onChange={(e) => {
                return handlePasswordChange(e);
              }}
              id="centerPassword"
              placeholder="비밀번호"
              labelName="비밀번호"
              type="password"
              isRequired
            />
            <div className="flex gap-1">
              <AiOutlineInfoCircle
                width={16}
                height={16}
                className="h-fit my-auto"
              />

              <Link
                className="text-fontWeak underline underline-offset-2 smallFont"
                href="/auth/findpwd"
              >
                비밀번호를 잊어버리셨나요?
              </Link>
            </div>
          </div>
        </div>

        <Button type="submit" className="primaryButtonDefault">
          로그인
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
