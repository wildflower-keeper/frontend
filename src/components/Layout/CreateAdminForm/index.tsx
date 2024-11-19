"use client"

// Compo
import InputWithLabel from "@/components/Composition/InputWithLabel"
// Utils
import { useForm } from "react-hook-form";
//Types
import React, { Dispatch, SetStateAction, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createAdminAccount } from "@/api/v2/shelter-admin";
import { useRouter } from "next/navigation";

export interface AdminDataType {
  email: string
  password: string
  phoneNumber: number
  name: string
  remark: string
}

interface Props {
  setIsSuccess: Dispatch<SetStateAction<boolean>>
}

const CreateAdminForm = ({ setIsSuccess }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<AdminDataType>();
  const { mutate } = useMutation({
    mutationKey: createAdminAccount.mutationKey(),
    mutationFn: (adminData: AdminDataType) => createAdminAccount(adminData)
  });
  const [error, setError] = useState("");
  const onSubmit = ((adminData: AdminDataType) => {
    mutate(adminData, {
      onSuccess: (res) => {
        setIsSuccess(true);
      },
      onError: (error) => {
        setError(error.message);
      }
    })
  });

  const router = useRouter();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-4">
      <InputWithLabel
        {...register("email", {
          required: "이메일은 필수정보입니다.",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "이메일 형식이 잘못되었습니다."
          }
        })}

        title="이메일"
        id="email"
        error={errors.email?.message}
      />
      <div>
        <InputWithLabel
          {...register("password", {
            required: "비밀번호는 필수정보입니다.",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{10,15}$/,
              message: "문자, 숫자, 기호를 조합하여 10~15자리로 입력해주세요."
            }
          })}
          title="비밀번호"
          id="password"
          type="password"
          error={errors.password?.message}
        />
        <span className="text-xs text-[#19c23d]">문자, 숫자, 기호를 조합 10~15자리</span>
      </div>
      <InputWithLabel
        {...register("phoneNumber", {
          required: "전화번호는 필수정보입니다.",
        })}
        title="전화번호"
        id="phoneNumber"
        type="number"
        error={errors.phoneNumber?.message}
      />
      <InputWithLabel
        {...register("name", {
          required: "이름은 필수정보입니다.",
        })}
        title="이름"
        id="name"
        type="name"
        error={errors.name?.message}
      />
      <InputWithLabel
        {...register("remark")}
        title="관리자 별명"
        id="remark"
        type="remark"
        error={errors.remark?.message}
      />
      <span className="text-xs text-red-500">{error}</span>
      <div className="flex gap-5 text-white">
        <button type="button" onClick={() => router.back()} className="rounded-md w-[165px] py-1 bg-[#b7b7b7]">돌아가기</button>
        <button type="submit" className="rounded-md w-[165px] py-1 bg-[#00b226]">관리자 생성</button>
      </div>
    </form>
  )
};

export default CreateAdminForm;