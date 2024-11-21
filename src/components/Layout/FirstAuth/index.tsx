"use client";

// Compo
import Button from "@/components/base/Button";
import InputWithLabel from "@/components/Composition/InputWithLabel";
import { IoIosInformationCircleOutline } from "react-icons/io";
// Utils
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { firstAuth } from "@/api/v1/shelter-admin";
//Types
import type { LoginForm } from "@/api/v1/shelter-admin/type";
import Loading from "@/components/Composition/Loading";
import { useAuthContext } from "../AuthProvider";
import { setCookie } from "@/utils/cookie";
import { useForm } from "react-hook-form";
import LoginHelp from "./items/LoginHelp";

const FirstAuth = () => {
  const { register, handleSubmit, getValues } = useForm<LoginForm>();
  const { mutate, isPending } = useMutation({
    mutationKey: firstAuth.mutationKey(),
    mutationFn: (loginData: LoginForm) => firstAuth(loginData),
  });

  const authContext = useAuthContext();
  const { setIsSuccessFirstAuth, setCurAdminEmail } = authContext;

  const [error, setError] = useState("");

  const onSubmit = (loginData: LoginForm) => {
    setError("");
    mutate(loginData, {
      onSuccess: (res) => {
        setCurAdminEmail(getValues().email);
        setIsSuccessFirstAuth(true);
        setCookie("authToken", res.authToken, {
          path: "/",
          expires: new Date(res.expiredAt),
        });
      },
      onError: (error) => {
        setError(error.message);
      },
    });
  };
  return (
    <div className="w-80 flex items-center">
      <form
        className="flex flex-col gap-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full gap-5">
            <InputWithLabel
              {...register("email", {
                required: true
              })}
              title="이메일"
              id="email"
              placeholder="이메일을 입력해주세요."
              type="email"
            />
            <InputWithLabel
              {...register("pw", {
                required: true
              })}
              title="비밀번호"
              id="pw"
              placeholder="비밀번호를 입력해주세요."
              type="password"
            />
            {error != "" ? <div className="flex justify-end items-center gap-1">
              <IoIosInformationCircleOutline className="size-3" />
              <div className="text-gray-500 underline text-[10.5px] cursor-pointer">비밀번호를 잊어버리셨나요?</div>
            </div> : null}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {
            isPending ?
              <Loading loadingStyle="size-8 bg-green-500" />
              :
              <Button
                type="submit"
                className="primaryButtonDefault"
              >
                로그인
              </Button>
          }
          <div className="text-red-500 underline text-[10.5px]">{error}</div>
          <LoginHelp />
        </div>
      </form>
    </div>
  );
};

export default FirstAuth;