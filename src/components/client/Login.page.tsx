import React from "react";
import LoginForm from "../ui/LoginForm";
import Header from "../base/Header";

const Login = () => {
  return (
    <>
      <Header className="authHeader">
        <h1 className="flex flex-col items-start gap-2">
          <p>안녕하세요, 관리자님!</p>
          <p className="text-fontWeak text-sm">
            관리자 인증을 위해 로그인이 필요합니다.
          </p>
        </h1>
      </Header>
      <div className="flex-grow flex justify-center">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
