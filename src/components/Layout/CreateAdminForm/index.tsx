"use client"

// Compo
import InputWithLabel from "@/components/Composition/InputWithLabel"
// Utils
import { useForm } from "react-hook-form";
//Types
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { createAdminAccount } from "@/api/v1/shelter-admin";
import { useRouter } from "next/navigation";

export interface AdminDataType {
    email: string
    password: string
    phoneNumber: number
    name: string
    remark: string
  }

const CreateAdminForm = () => {
  const {register, handleSubmit} = useForm<AdminDataType>();
  const {mutate} = useMutation({
    mutationKey: createAdminAccount.mutationKey(),
    mutationFn: (adminData: AdminDataType) => createAdminAccount(adminData)
  })
    const onSubmit = ((adminData: AdminDataType) => {
        console.log(adminData);
        mutate(adminData, {
            onSuccess: (res) => {
                
            },
            onError: (error) => {
                console.log(error);
            }
        })
    });

    const router = useRouter();
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-5">
        <InputWithLabel
              {...register("email", { 
                required: true,
            })}
              title="이메일"
              id="email"
              type="email"
            />
            <div>
            <InputWithLabel
              {...register("password", { 
                required: true,
            })}
              title="비밀번호"
              id="password"
              type="password"
            />
            <span className="text-xs text-[#19c23d]">문자, 숫자, 기호를 조합하여 10~15자리로 입력해주세요.</span>
            </div>
            <InputWithLabel
              {...register("phoneNumber", { 
                required: true,
            })}
              title="전화번호"
              id="phoneNumber"
              type="number"
            />
            <InputWithLabel
              {...register("name", { 
                required: true,
            })}
              title="이름"
              id="name"
              type="name"
            />
            <InputWithLabel
              {...register("remark")}
              title="관리자 별명"
              id="remark"
              type="remark"
            />
            <div className="flex gap-5 text-white">
                <button type="button" onClick={() => router.back()} className="rounded-md w-[165px] py-1 bg-[#b7b7b7]">취소</button>
                <button type="submit" className="rounded-md w-[165px] py-1 bg-[#00b226]">관리자 생성</button>
            </div>
    </form>
    )
};

export default CreateAdminForm;