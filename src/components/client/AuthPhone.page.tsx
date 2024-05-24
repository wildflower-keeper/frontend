import React from "react";
import Header from "../base/Header";
import AuthPhoneForm from "../ui/AuthPhoneForm";

const AuthPhone = () => {
  return (
    <>
      <Header className="authHeader">
        <h1>
          <p>센터 관리자 Web서비스</p>
          <p>비밀번호 찾기</p>
        </h1>
      </Header>
      <div className="my-auto flex justify-center">
        <AuthPhoneForm />
      </div>
    </>
  );
};

export default AuthPhone;
