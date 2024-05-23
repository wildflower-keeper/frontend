import React from "react";
import LoginForm from "../ui/LoginForm";
import Header from "../base/Header";

const Login = () => {
  return (
    <div className="flex-grow flex flex-col gap-14">
      <Header className="h-32 flex justify-center items-center">
        <h1 className="flex flex-col headerFont justify-center items-center">
          <p>센터 관리자 Web서비스</p>
          <p>로그인</p>
        </h1>
      </Header>
      <div className="flex-grow flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
