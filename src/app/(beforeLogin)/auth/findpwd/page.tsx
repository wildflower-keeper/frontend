// Compo
import FindPwdForm from "@/components/Layout/FindPwdForm";
// Utils
import React from "react";

const page = () => {
  return (
    <>
      <header className="authHeader">
        <h1>
          <p>센터 관리자 Web서비스</p>
          <p>비밀번호 찾기</p>
        </h1>
      </header>
      <div className="flex-grow flex justify-center">
        <FindPwdForm />
      </div>
    </>
  );
};

export default page;
