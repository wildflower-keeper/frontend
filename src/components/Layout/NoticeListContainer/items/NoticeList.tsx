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
                data.map(({ sendAt, title, contents, id }, index) => (
                    <div
                        onClick={() => onNoticeClick(id)}
                        key={id}
                        className={`cursor-pointer py-3 grid grid-cols-7 border-b border-solid border-neutral-200 ${isOpenReceptionStatusPopup && selectedNoticeId === id && "bg-neutral-200"}`}
                        style={{
                            gridTemplateColumns: gridCol
                        }}>
                        <div className="basicRowStyle">{index + 1}</div>
                        <div className="basicRowStyle">{formatDateString(sendAt, "yyyy.MM.dd HH:mm")}</div>
                        <div className="basicRowStyle">{title}</div>
                        <div className="h-fit flex items-center text-left">{contents}</div>
                        <div className="basicRowStyle flex flex-col items-center">
                            <span>참여조사</span>
                            {true ? <FaCheck className="size-6 text-[#19c23d]" /> : <IoClose className="size-6 text-neutral-400" />}
                        </div>  
                        <div className="basicRowStyle flex flex-col items-center">
                            <span>개별공지</span><span>8/16</span>
                        </div>
                        <button className="basicRowStyle bg-[#19c23d] text-white p-2 rounded-xl">상세보기</button>
                    </div>
                ))
            }
        </div>
    )
}

export default NoticeList;