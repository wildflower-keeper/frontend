import InputWithLabel from "@/components/InputWithLabel";
import Button from "@/components/base/Button";
import Link from "next/link";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const LoginForm = () => {
  return (
    <div className="w-80">
      <form className="flex flex-col gap-14">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="centerSelector" className="smallFont">
              센터명
            </label>
            <select id="centerSelector" className="py-1" required>
              <option value="" disabled selected>
                센터를 선택해주세요.
              </option>
              <option value="비전트레이닝센터">비전트레이닝센터 </option>
              <option value="다시서기종합센터">다시서기종합센터</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <InputWithLabel
              id="centerPassword"
              placeholder="비밀번호"
              labelName="비밀번호"
              type="password"
              isRequired
            />
            <div className="flex gap-1">
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
            </div>
          </div>
        </div>

        <Button type="submit" className="primaryButtonDefault">
          로그인
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
