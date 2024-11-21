"use client";

import InputWithLabel from "@/components/Composition/InputWithLabel";
import Button from "@/components/base/Button";
import React from "react";

const AuthPhoneForm = () => {
  return (
    <div className="w-80">
      <form className=" h-72 flex flex-col justify-start">
        <div className="flex">
          <InputWithLabel
            type="tel"
            id="verificationCode"
            title="인증번호"
            placeholder="전송받은 인증번호를 입력해주세요"
          />
          <Button className="primaryButtonSmall">확인</Button>
        </div>
        <Button className="primaryButtonDefault mt-auto">닫기</Button>
      </form>
    </div>
  );
};

export default AuthPhoneForm;
