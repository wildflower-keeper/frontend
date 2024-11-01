"use client"

// Compo
import { useAuthContext } from "@/components/Layout/AuthProvider";
import FirstAuth from "@/components/Layout/FirstAuth";
import SecondAuth from "@/components/Layout/SecondAuth";
// Utils
import React from "react";

const Page = () => {
  const { isSuccessFirstAuth } = useAuthContext();
  return (
    <>
      <header className="authHeader">
        <h1 className="flex flex-col items-start gap-2">
          <p>안녕하세요, 관리자님!</p>
          <p className="text-fontWeak text-sm">
            관리자 인증을 위해 로그인이 필요합니다.
          </p>
        </h1>
      </header>
      <div className="flex-grow flex justify-center">
        {
          !isSuccessFirstAuth ?
            <FirstAuth />
            :
            <SecondAuth />
        }
      </div>
    </>
  );
};

export default Page;
