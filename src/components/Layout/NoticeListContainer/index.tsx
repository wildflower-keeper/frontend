"use client"

import Notice from "@/components/Layout/NoticeListContainer/items/Notice";
import ReceptionStatus from "@/components/Layout/NoticeListContainer/items/Reception/ReceptionStatus";
import { useNoticeContext } from "@/components/Layout/NoticeProvider";

const NoticeListContainer = () => {
    const noticeContext = useNoticeContext();
    const { isOpenReceptionStatusPopup } = noticeContext;
    return (
        <div>
            <div className="custom-page-name">공지사항 이력</div>
            <div className="relative flex items-start justify-between gap-10 w-full">
                    <Notice />
                    {isOpenReceptionStatusPopup && <ReceptionStatus />}
            </div>
        </div>
    )
}

export default NoticeListContainer;