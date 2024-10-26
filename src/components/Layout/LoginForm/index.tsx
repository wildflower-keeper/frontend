"use client";

// Compo
import Button from "@/components/base/Button";
import InputWithLabel from "@/components/Composition/InputWithLabel";
import ShleterSelect from "@/components/Composition/CustomSelectBox";
import { IoIosInformationCircleOutline } from "react-icons/io";
// Utils
import React, { useState } from "react";
import { setCookie } from "@/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/v1/shelter-admin";
//Types
import type { LoginBodyType } from "@/api/v1/shelter-admin/type";

const LoginForm = () => {
  const { mutate } = useMutation({
    mutationKey: login.mutationKey(),
    mutationFn: (loginData: LoginBodyType) => login(loginData),
  });

  const [loginInfo, setLoginInfo] = useState<LoginBodyType>({
    id: 0,
    pw: "",
  });

  const [error, setError] = useState("");

  const handleLoginSubmit = () => {
    mutate(loginInfo, {
      onSuccess: (res) => {
        setCookie("authToken", res.authToken, {
          path: "/",
          expires: new Date(res.expiredAt),
        });
        // window.location.href = "/dashboard";
      },
      onError: (error) => {
        setError(error.message);
      },
    });
  };
  return (
    <div className="w-80">
      <form
        className="flex flex-col gap-14"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="centerSelector" className="smallFont">
              센터명
            </label>
            <ShleterSelect shelterChange={setLoginInfo} />
          </div>
          <div className="flex flex-col w-full">
            <InputWithLabel
              value={loginInfo.pw}
              onChange={(e) =>
                setLoginInfo((prev) => ({ ...prev, pw: e.target.value }))
              }
              id="centerPassword"
              placeholder="비밀번호"
              labelName="비밀번호"
              type="password"
            />
            {error != "" ? <div className="flex justify-end items-center gap-1">
              <IoIosInformationCircleOutline className="size-3" />
              <div className="text-gray-500 underline text-[10.5px] cursor-pointer">비밀번호를 잊어버리셨나요?</div>
            </div> : null}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button
            type="submit"
            className="primaryButtonDefault"
            onClick={handleLoginSubmit}
          >
            로그인
          </Button>
          <div className="text-red-500 underline text-[10.5px]">{error}</div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
