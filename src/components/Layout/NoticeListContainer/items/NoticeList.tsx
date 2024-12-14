"use client"

import { NoticeResponseType } from "@/api/v2/shelter-admin/type";
import { gridCol } from "./notice.const";
import { formatDateString } from "@/utils/string/date";
import { useNoticeContext } from "../../NoticeProvider";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";


const NoticeList = ({ data }: { data: NoticeResponseType[] | [] }) => {
    const noticeContext = useNoticeContext();
    const { setIsOpenReceptionStatusPopup, setSelectedNoticeId, selectedNoticeId, isOpenReceptionStatusPopup } = noticeContext;
    const onNoticeClick = (id: number) => {
        setIsOpenReceptionStatusPopup(true);
        setSelectedNoticeId(id);
    }

    return (
        <div className="w-full">
            {
                data.map(({ noticeId, title, contents, createdAt, readCount, totalCount, isSurvey, isGlobal, imageUrl }, index) => (
                    <div
                        onClick={() => onNoticeClick(noticeId)}
                        key={noticeId}
                        className={`cursor-pointer py-3 grid grid-cols-7 border-b border-solid border-neutral-200 ${isOpenReceptionStatusPopup && selectedNoticeId === noticeId && "bg-neutral-200"}`}
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
                            <span>{isGlobal ? "전체 공지" : "개별 공지"}</span><span>{readCount}/{totalCount}</span>
                        </div>
                        <button className="basicRowStyle bg-[#19c23d] text-white p-2 rounded-xl">상세보기</button>
                    </div>
                ))
            }
        </div>
    )
}

export default NoticeList;