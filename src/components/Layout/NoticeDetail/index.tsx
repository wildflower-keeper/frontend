"use client"

import { IoCloseOutline } from "react-icons/io5";
import { useNoticeContext } from "@/components/Layout/NoticeProvider";
import { useQuery } from "@tanstack/react-query";
import { getNoticeRecipient } from "@/api/v2/shelter-admin";
import RecipientList from "./items/RecipientList";
import NoticeDetailHeader from "./items/NoticeDetailHeader";
import NoticeImage from "./items/NoticeImage";

const NoticeDetail = () => {
    const noticeContext = useNoticeContext();
    const { setIsOpenNoticeDetailPopup, selectedNoticeId } = noticeContext;
    const onCloseClick = () => {
        setIsOpenNoticeDetailPopup(false);
    }

    const { data } = useQuery({
        queryFn: () => getNoticeRecipient(selectedNoticeId),
        queryKey: [selectedNoticeId, ...getNoticeRecipient.queryKey()]
    });
    return (
        <div className="absolute w-full max-w-[800px] min-w-[600px] h-[600px] flex flex-col gap-4 right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 p-3 bg-white rounded-2xl shadow-xl">
            < div className="flex flex-row justify-between" >
                <h1 className="text-[15px] font-bold">공지사항 상세보기</h1>
                <button
                    onClick={onCloseClick}
                >
                    <IoCloseOutline size={22} />
                </button>
            </div >
            <NoticeDetailHeader />
            <div className="flex gap-5">
                <RecipientList data={data?.items || []} />
                <NoticeImage />
            </div>
        </div >

    )
}

export default NoticeDetail;