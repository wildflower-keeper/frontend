"use client";

import InputWithLabel from "@/components/InputWithLabel";
import Button from "@/components/base/Button";
import CustomSelectBox from "@/components/base/CustomSelectBox";
import useLoginStore from "@/store/useLogin";
import { getShelters, login } from "@/utils/api/v1/shelter-admin";
import { setCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
//Types
import type { ShelterType } from "@/utils/api/v1/shelter-admin/type";

type loginInfoType = {
  shelterId: string;
  password: string;
};

const LoginForm = () => {
  const [shelters, setShelters] = useState<ShelterType[]>([
    { shelterId: 1, shelterName: "Shelter 1" },
    { shelterId: 2, shelterName: "Shelter 2" },
    { shelterId: 3, shelterName: "Shelter 3" },
  ]);
  const { isLogin, setIsLogin } = useLoginStore();
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

  useEffect(() => {
    getShelters()
      .then(setShelters)
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (isLogin) {
      redirect("dashboard");
    }
  }, [isLogin]);

  const handleLoginSubmit = () => {
    const loginData = {
      id: parseInt(loginInfo.shelterId, 10),
      pw: loginInfo.password,
    };
    login(loginData).then((res) => {
      if ("authToken" in res && "expiredAt" in res) {
        setCookie("authToken", res.authToken, {
          path: "/",
          expires: new Date(res.expiredAt),
        });
        setIsLogin(true);
      }
      if ("errorCode" in res && "description" in res) {
        console.log(res.description);
      }
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
            {/* <div className="flex gap-1">
              <AiOutlineInfoCircle
                width={16}
                height={16}
                className="h-fit my-auto"
              />

              <Link
                className="text-fontWeak underline underline-offset-2 smallFont"
                href="/auth/findpwd"
              >
                비밀번호를 잊어버리셨나요?
              </Link>
            </div> */}
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
