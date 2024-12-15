"use client"

// Compo
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

// Utils
import { gridCol } from "./notice.const";
import { formatDateString } from "@/utils/string/date";
import { useNoticeContext } from "../../NoticeProvider";

// Types
import { NoticeResponseType } from "@/api/v2/shelter-admin/type";
import { useCallback } from "react";


const NoticeList = ({ data }: { data: NoticeResponseType[] | [] }) => {
    const noticeContext = useNoticeContext();
    const { setIsOpenNoticeDetailPopup, setSelectedNoticeId, selectedNoticeId, isOpenNoticeDetailPopup } = noticeContext;
    const onNoticeClick = useCallback((id: number) => {
        setIsOpenNoticeDetailPopup(true);
        setSelectedNoticeId(id);
    }, []);

    return (
        <div className="w-full">
            {
                data.map(({ noticeId, title, contents, createdAt, readCount, totalCount, isSurvey, isGlobal, imageUrl }, index) => (
                    <div
                        key={noticeId}
                        className={`py-3 grid grid-cols-7 border-2 border-solid mt-2 rounded-xl
                            ${readCount !== totalCount ? "border-[#19C23D]" : "border-neutral-200"}
                            ${isOpenNoticeDetailPopup && selectedNoticeId === noticeId && "bg-neutral-200"}`}
                        style={{
                            gridTemplateColumns: gridCol
                        }}>
                        <div className="basicRowStyle">{index + 1}</div>
                        <div className="basicRowStyle">{formatDateString(createdAt, "yyyy.MM.dd HH:mm")}</div>
                        <div className="basicRowStyle">{title}</div>
                        <div className="h-fit flex items-center text-left">{contents}</div>
                        <div className="basicRowStyle flex flex-col items-center">
                            <span>참여조사</span>
                            {isSurvey ? <FaCheck className="size-6 text-[#19c23d]" /> : <IoClose className="size-6 text-neutral-400" />}
                        </div>
                        <div className="basicRowStyle flex flex-col items-center">
                            <div>{isGlobal ? "전체 공지" : "개별 공지"}</div><div><span className={`${readCount !== totalCount && "text-[#19c23d]"}`}>{readCount}</span>/{totalCount}</div>
                        </div>
                        <button onClick={() => onNoticeClick(noticeId)} className="basicRowStyle bg-[#19c23d] text-white p-2 rounded-xl">상세보기</button>
                    </div>
                ))
            }
        </div>
    )
}

export default NoticeList;