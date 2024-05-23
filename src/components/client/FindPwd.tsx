import React from "react";
import Header from "../base/Header";
import FindPwdForm from "../ui/FindPwdForm";

const FindPwd = () => {
  return (
    <>
      <Header className="authHeader">
        <h1>
          <p>센터 관리자 Web서비스</p>
          <p>비밀번호 찾기</p>
        </h1>
      </Header>
      <div className="flex-grow flex justify-center">
        <FindPwdForm />
      </div>
    </>
  );
};

export default FindPwd;
