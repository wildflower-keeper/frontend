"use client"

import { noticeList, postNotice } from "@/api/v2/shelter-admin";
import { NoticeDataType, NoticeRequestType } from "@/api/v2/shelter-admin/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import NotificationTypeSelector from "./items/NotificationTypeSelector";
import OpenSelectUserButton from "./items/OpenSelectUserButton";
import { useNoticeContext } from "../NoticeProvider";
import NoticePreview from "./items/NoticePreview";
import NoticeRecipientModal from "../NoticeRecipientModal";
import SelectedUserList from "./items/SelectedUserList";

const NoticeAddForm = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<NoticeDataType>();
    const queryClient = useQueryClient();
    const noticeContext = useNoticeContext();
    const {isEntirety, isOpenUserSelectModal, noticeTarget, setIsOpenSuccessPopup} = noticeContext;
    const { mutate } = useMutation({
        mutationKey: postNotice.mutationKey(),
        mutationFn: (data: NoticeRequestType) => postNotice(data)
    })
    const onSubmit = (data: NoticeDataType) => {
        const noticeData = {...data, targetHomelessIds: [] as number[]}
        if(!isEntirety) {
            noticeData.targetHomelessIds = noticeTarget.map((item) => +Object.keys(item)[0]);
        }
        mutate(noticeData,
            {
                onSuccess: (res) => {
                    setIsOpenSuccessPopup(true);
                    queryClient.invalidateQueries({queryKey: [...noticeList.queryKey()]});
                    reset();
                },
                onError: (error) => {
                    console.error(error);
                }
            }
        )
    }

    const error = Boolean(errors.title || errors.content || !watch().content || !watch().title);
    return (
        <div className="relative min-w-[400px]">
            {isOpenUserSelectModal && <NoticeRecipientModal />}
            <NotificationTypeSelector />
            <NoticePreview title={watch().title} content={watch().content} />
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
                                    value: 50, message: "50자 이내로 작성해주세요."
                                }
                            })}
                            placeholder="내용을 입력해주세요." id="content" className={`border border-1 border-solid border-neutral-300 w-full rounded-md px-4 py-1 h-[100px] ${errors.content && "text-red-400 border-red-400"}`}
                        />
                        <div className="text-red-400">{errors.content?.message}</div>
                    </div>
                </div>
                <OpenSelectUserButton />
                <SelectedUserList />
                <button type="submit" disabled={error} className={`${error ? "bg-neutral-300" : "bg-[#00bf40]"} text-white py-2 mt-4 rounded-xl`}>보내기</button>
            </form>
        </div>
    )
}

export default NoticeAddForm;