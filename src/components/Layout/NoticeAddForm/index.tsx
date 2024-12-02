"use client"

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface NoticeDataType {
    title: string
    content: string
}

const NoticeAddForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<NoticeDataType>();

    const onSubmit = (data: NoticeDataType) => {

    }

    const error = Boolean(errors.title || errors.content);
    return (
        <div className="min-w-[350px]">
            <div className="flex items-center bg-neutral-300 p-3 gap-2 rounded-md mb-5">
                <div className="w-6 h-6 bg-white rounded-md p-1">
                    <Image
                        src="/assets/logos/wildflower_logo.png"
                        alt="아이콘"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-sm">{watch().title || "제목을 입력해주세요."} <span className="text-xs text-neutral-500">지금</span></h1>
                    <p className="text-sm text-neutral-500 max-w-[270px]">{watch().content || "내용을 입력해주세요."}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div>
                    <label htmlFor="title">제목</label>
                    <div>
                        <input {...register("title",
                            {
                                required: true,
                                maxLength: {
                                    value: 20, message: "20자 이내로 작성해주세요."
                                }
                            })}
                            placeholder="제목을 입력해주세요." id="title" className={`border border-1 border-solid border-[#b3b3b3] w-full rounded-md px-4 py-1 ${errors.title && "text-red-400 border-red-400"}`}
                        />
                        <div className="text-red-400">{errors.title?.message}</div>
                    </div>
                </div>
                <div>
                    <label htmlFor="content">내용</label>
                    <div>
                        <textarea {...register("content",
                            {
                                required: true,
                                maxLength: {
                                    value: 50, message: "50자 이내로 작성해주세요."
                                }
                            })}
                            placeholder="내용을 입력해주세요." id="content" className={`border border-1 border-solid border-[#b3b3b3] w-full rounded-md px-4 py-1 h-[100px] ${errors.content && "text-red-400 border-red-400"}`}
                        />
                        <div className="text-red-400">{errors.content?.message}</div>
                    </div>
                </div>
                <button type="submit" disabled={error} className={`${error ? "bg-neutral-300" : "bg-[#00bf40]"} text-white py-2 mt-4 rounded-xl`}>보내기</button>
            </form>
        </div>
    )
}

export default NoticeAddForm;