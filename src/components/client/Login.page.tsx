import React from "react";
import LoginForm from "../ui/LoginForm";
import Header from "../base/Header";

const Login = () => {
  return (
    <>
      <Header className="authHeader">
        <h1>
          <p>센터 관리자 Web서비스</p>
          <p>로그인</p>
        </h1>
      </Header>
      <div className="flex-grow flex justify-center">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
