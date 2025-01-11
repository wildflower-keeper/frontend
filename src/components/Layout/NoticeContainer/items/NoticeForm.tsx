"use client"

import { noticeList, postNotice, uploadImage } from "@/api/v2/shelter-admin";
import { NoticeDataType, NoticeRequestType } from "@/api/v2/shelter-admin/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNoticeContext } from "../../NoticeProvider";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import FinalCheckButton from "./FinalCheckButton";

const checkBoxStyle = {
    color: '#bebebe',
    '&.Mui-checked': {
        color: '#34c01f',
    },
}

const NoticeForm = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<NoticeDataType>();
    const [loading, setLoading] = useState(false);
    const [isIncludeSurvey, setIsIncludeSurvey] = useState(false);
    const queryClient = useQueryClient();
    const noticeContext = useNoticeContext();
    const { isEntirety, noticeTarget, setIsOpenSuccessPopup, setIsOpenFinalCheckButton, setNoticeTarget, uploadedImage, setUploadedImage } = noticeContext;

    const { mutateAsync } = useMutation({
        mutationKey: uploadImage.mutationKey(),
        mutationFn: (image: FormData) => uploadImage(image)
    });

    const handleImageSubmit = async (uploadedImage: File) => {
        if (!uploadedImage) {
            alert("파일을 선택하세요!");
            return;
        }

        const formData = new FormData();
        formData.append("multipartFile", uploadedImage);

        try {
            const response = await mutateAsync(formData);
            return response;
        } catch (error) {
            console.error("업로드 실패:", error);
        }
    };

    const { mutate } = useMutation({
        mutationKey: postNotice.mutationKey(),
        mutationFn: (data: NoticeRequestType) => postNotice(data)
    });
    const onSubmit = async (data: NoticeDataType) => {
        setLoading(true);
        let image = "";
        if (uploadedImage) {
            const result = await handleImageSubmit(uploadedImage);
            if (result) {
                const { data: { imageUrl } } = result;
                image = imageUrl;
            }
        }
        const noticeData = { ...data, targetHomelessIds: [] as number[], isSurvey: isIncludeSurvey, imageUrl: image }
        if (!isEntirety) {
            noticeData.targetHomelessIds = noticeTarget.map((item) => +Object.keys(item)[0]);
        }
        mutate(noticeData,
            {
                onSuccess: (res) => {
                    setIsOpenSuccessPopup(true);
                    setIsOpenFinalCheckButton(false);
                    setNoticeTarget([]);
                    setUploadedImage(null);
                    queryClient.invalidateQueries({ queryKey: [...noticeList.queryKey()] });
                    reset();
                },
                onError: (error) => {
                    console.error(error);
                },
                onSettled: () => {
                    setLoading(false);
                }
            }
        )
    }

    const error = Boolean(errors.title || errors.content || !watch().content || !watch().title);
    const notUserSelected = !isEntirety && noticeTarget.length === 0;
    return (
        <div className="min-w-[400px]">
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
                            placeholder="제목을 입력해주세요." id="title" className={`border border-1 border-solid border-neutral-300 w-full rounded-md px-4 py-1 ${errors.title && "text-red-400 border-red-400"}`}
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
                                    value: 100, message: "100자 이내로 작성해주세요."
                                }
                            })}
                            placeholder="내용을 입력해주세요." id="content" className={`border border-1 border-solid border-neutral-300 w-full rounded-md px-4 py-1 h-[100px] ${errors.content && "text-red-400 border-red-400"}`}
                        />
                        <div className="text-red-400">{errors.content?.message}</div>
                    </div>
                </div>
                <FinalCheckButton isLoading={loading} />
                <div className="flex justify-between items-center bg-neutral-200 rounded-xl px-2 border-2 border-solid border-neutral-300">
                    참여 여부 조사
                    <Checkbox
                        onChange={() => setIsIncludeSurvey(prev => !prev)}
                        checked={isIncludeSurvey}
                        sx={checkBoxStyle}
                    />
                </div>
                <button type="button"
                    onClick={() => setIsOpenFinalCheckButton(true)}
                    disabled={error || notUserSelected}
                    className={`${error || notUserSelected ? "bg-neutral-200" : "bg-[#00bf40]"} text-white py-2 mt-4 rounded-xl`}>
                    보내기
                </button>
            </form>
        </div>
    )
}

export default NoticeForm;