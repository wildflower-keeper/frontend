"use client"

import { IoCloseOutline } from "react-icons/io5";
import TotalStatus from "./TotalStatus";
import StatusList from "./StatusList";
import { useNoticeContext } from "@/components/Layout/NoticeProvider";
import { useQuery } from "@tanstack/react-query";
import { getNoticeRecipient } from "@/api/v2/shelter-admin";

const ReceptionStatus = () => {
    const noticeContext = useNoticeContext();
    const { setIsOpenReceptionStatusPopup, selectedNoticeId } = noticeContext;
    const onCloseClick = () => {
        setIsOpenReceptionStatusPopup(false);
    }

    const { data } = useQuery({
        queryFn: () => getNoticeRecipient(selectedNoticeId),
        queryKey: [selectedNoticeId, ...getNoticeRecipient.queryKey()]
    });
    return (
        <div>
            <div className="absolute flex flex-col gap-4 left-0 top-0 p-5 bg-white min-w-[400px] h-full rounded-2xl shadow-xl">
                < div className="flex flex-row justify-between" >
                    <h1>수신 현황</h1>
                    <button
                        onClick={onCloseClick}
                        className="flex justify-center items-center w-6 h-6 bg-[#FFF0F0]">
                        <IoCloseOutline size={30} />
                    </button>
                </div >
                <TotalStatus noticeReadInfo={data?.noticeReadInfo} />
                <StatusList data={data?.items || []} />
            </div >
        </div>

    )
}

export default ReceptionStatus;