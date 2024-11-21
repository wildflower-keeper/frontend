"use client"

// Compo
import { useAuthContext } from "@/components/Layout/AuthProvider";
import FirstAuth from "@/components/Layout/FirstAuth";
import EmailAuthenticationForm from "@/components/Layout/EmailAuthenticationForm";
// Utils
import React from "react";

const Page = () => {
  const { isSuccessFirstAuth } = useAuthContext();
  return (
    <>
      <header className="authHeader">
        <h1 className="flex flex-col items-start gap-2">
          <p className="text-fontWeak text-sm">
            관리자 인증을 위해 로그인이 필요합니다.
          </p>
        </h1>
      </header>
      <div className="flex justify-center">
        {
          !isSuccessFirstAuth ?
            <FirstAuth />
            :
            <EmailAuthenticationForm />
        }
      </div>
    </>
  );
};

export default Page;