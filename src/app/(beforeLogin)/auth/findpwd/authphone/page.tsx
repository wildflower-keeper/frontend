// Compo
import AuthPhoneForm from "@/components/ui/AuthPhoneForm";
// Utils
import React from "react";

const AuthPhonePage = () => {
  return (
    <>
      <header className="authHeader">
        <h1>
          <p>센터 관리자 Web서비스</p>
          <p>비밀번호 찾기</p>
        </h1>
      </header>
      <div className="my-auto flex justify-center">
        <AuthPhoneForm />
      </div>
    </>
  );
};

export default AuthPhonePage;
