"use client";

// Compo
import InputWithLabel from "@/components/InputWithLabel";
import Button from "@/components/base/Button";
import CustomSelectBox from "@/components/base/CustomSelectBox";
// Utils
import { useLogin } from "@/hooks/queries/v1/shelter-admin";
import React, { useState } from "react";
import { setCookie } from "@/utils/cookie";
import { useGetShelters } from "@/hooks/queries/v1/shared";
//Types

type loginInfoType = {
  shelterId: string;
  password: string;
};

const LoginForm = () => {
  // fetch Shelters
  const { mutate: login } = useLogin();
  const { data: shelters } = useGetShelters();

  const [loginInfo, setLoginInfo] = useState<loginInfoType>({
    shelterId: "",
    password: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
  };
  const handleShelterChange = (value: number) => {
    setLoginInfo({ ...loginInfo, shelterId: String(value) });
  };

  const handleLoginSubmit = () => {
    const loginData = {
      id: parseInt(loginInfo.shelterId, 10),
      pw: loginInfo.password,
    };
    login(loginData, {
      onSuccess: (res) => {
        setCookie("authToken", res.authToken, {
          path: "/",
          expires: new Date(res.expiredAt),
        });
        window.location.href = "/dashboard";
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <div className="w-80">
      <form
        className="flex flex-col gap-14"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="centerSelector" className="smallFont">
              센터명
            </label>
            <CustomSelectBox
              shelters={shelters}
              handleShelterChange={handleShelterChange}
            />
          </div>

          <div className="flex flex-col gap-5 w-full">
            <InputWithLabel
              value={loginInfo.password}
              onChange={(e) => {
                return handlePasswordChange(e);
              }}
              id="centerPassword"
              placeholder="비밀번호"
              labelName="비밀번호"
              type="password"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="primaryButtonDefault"
          onClick={handleLoginSubmit}
        >
          로그인
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
