import React from "react";
import Link from "next/link";
import Input from "../base/Input";
import Button from "../base/Button";

const Login = () => {
  return (
    <div className="">
      <div className=" h-full flex justify-center">
        <main className="flex flex-col justify-center items-center">
          <h1>
            <p>센터 관리자 Web서비스</p>
            <p>로그인</p>
          </h1>
          <div>
            <form className="flex flex-col gap-4 items-center">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="centerSelector">센터명</label>
                <select
                  id="centerSelector"
                  className="border border-solid border-gray-300 rounded-md px-2 py-1"
                >
                  <option value={0}>센터를 선택해주세요.</option>
                  <option value="비전트레이닝센터">비전트레이닝센터 </option>
                  <option value="다시서기종합센터">다시서기종합센터</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="centerPassword">비밀번호</label>
                <Input
                  id="centerPassword"
                  className="border border-solid border-gray-300 rounded-md px-2 py-1"
                  placeholder="비밀번호"
                  type="password"
                />
              </div>
              <Button
                type="submit"
                className="bg-primary text-white rounded-md w-fit px-3 py-2 hover:bg-blue-300"
              >
                로그인
              </Button>
              <Link
                className="text-blue-500 hover:text-blue-300 hover:underline"
                href="/loss"
              >
                비밀번호를 잊어버리셨나요?
              </Link>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
