import React from "react";
import LoginForm from "../ui/LoginForm";
import Header from "../base/Header";

const Login = async () => {
  // const res = await customAxios({
  //   method: "GET",
  //   url: "/api/v1/shared/shelters",
  // });
  const shelters = [
    { shelterId: 1, shelterName: "쉼터" },
    { shelterId: 2, shelterName: "놀이터" },
  ];
  return (
    <>
      <Header className="authHeader">
        <h1>
          <p>센터 관리자 Web서비스</p>
          <p>로그인</p>
        </h1>
      </Header>
      <div className="flex-grow flex justify-center">
        <LoginForm shelters={shelters} />
      </div>
    </>
  );
};

export default Login;
