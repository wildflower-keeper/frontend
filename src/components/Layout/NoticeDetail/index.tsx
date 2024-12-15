"use client"

// Compo
import RecipientList from "./items/RecipientList";
import NoticeDetailHeader from "./items/NoticeDetailHeader";
import NoticeImage from "./items/NoticeImage";
import { IoCloseOutline } from "react-icons/io5";

// Utils
import { useNoticeContext } from "@/components/Layout/NoticeProvider";
import { useQuery } from "@tanstack/react-query";
import { getNoticeDetail, getNoticeRecipient } from "@/api/v2/shelter-admin";
import { useEffect, useState } from "react";

// Types

const NoticeDetail = () => {
    const [selectedUserList, setSelectedUserList] = useState<number[]>([]);
    const [userType, setUserType] = useState(0);
    const noticeContext = useNoticeContext();
    const { setIsOpenNoticeDetailPopup, selectedNoticeId } = noticeContext;
    const onCloseClick = () => {
        setIsOpenNoticeDetailPopup(false);
    }

    const { data: noticeDetailData } = useQuery({
        queryFn: () => getNoticeDetail(selectedNoticeId),
        queryKey: [selectedNoticeId, ...getNoticeDetail.queryKey()]
    });
    const { data: noticeRecipientData } = useQuery({
        queryFn: () => getNoticeRecipient(selectedNoticeId),
        queryKey: [selectedNoticeId, ...getNoticeRecipient.queryKey()]
    });
    useEffect(() => {
        if(userType === 1) {
            setSelectedUserList(noticeDetailData?.unreadHomelessIds || []);
        } else {
            setSelectedUserList(noticeDetailData?.notParticipateHomelessIds || []);
        }
    }, [userType]);

    return (
        <div className="fixed w-full max-w-[800px] min-w-[600px] h-[600px] flex flex-col gap-4 right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 p-3 bg-white rounded-2xl shadow-xl top-56">
            < div className="flex flex-row justify-between" >
                <h1 className="text-[15px] font-bold">공지사항 상세보기</h1>
                <button
                    onClick={onCloseClick}
                >
                    <IoCloseOutline size={22} />
                </button>
            </div >
            <NoticeDetailHeader
                id={noticeDetailData?.noticeId || 0}
                title={noticeDetailData?.title || ""}
                contents={noticeDetailData?.contents || ""}
                createdAt={noticeDetailData?.createdAt || new Date() + ""}
                isSurvey={noticeDetailData?.isSurvey || false}
            />
            <div className="flex gap-5">
                <RecipientList 
                data={noticeRecipientData?.items || []} 
                selectedUserList={selectedUserList} 
                userType={userType} 
                setUserType={setUserType}
                />
                {/* <NoticeImage /> */}
            </div>
            <div className="w-full flex justify-center items-center">
                <button onClick={onCloseClick} className="w-[500px] py-1 bg-[#19C23D] text-white rounded-xl">확인</button>
            </div>
        </div >

    )
}

export default NoticeDetail;