"use client";

// Compo
import InputWithLabel from "@/components/InputWithLabel";
import Button from "@/components/base/Button";
import CustomSelectBox from "@/components/base/CustomSelectBox";
// Utils
import React, { useEffect, useState } from "react";
import { getShelters } from "@/utils/api/v1/shared";
import { ShelterType } from "@/utils/api/v1/shared/type";
import { login } from "@/utils/api/v1/shelter-admin";
import { setCookie } from "@/utils/cookie";

//Types

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

  const handleLoginSubmit = () => {
    const loginData = {
      id: parseInt(loginInfo.shelterId, 10),
      pw: loginInfo.password,
    };

    login(loginData)
      .then((res) => {
        setCookie("authToken", res.authToken, {
          path: "/",
          expires: new Date(res.expiredAt),
        });

        window.location.href = "/dashboard";
      })
      .catch((error) => console.log(error));
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
