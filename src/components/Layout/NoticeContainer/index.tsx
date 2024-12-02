"use client"

import AddNoticeForm from "../AddNoticeForm";
import { useNoticeContext } from "../NoticeProvider";
import Notice from "./items/Notice";
import ReceptionStatus from "./items/Reception/ReceptionStatus";
import SuccessPopup from "./items/SuccessPopup";

const NoticeContainer = () => {
    const noticeContext = useNoticeContext();
    const { isOpenReceptionStatusPopup } = noticeContext;
    return (
        <div>
            <div className="custom-page-name">공지사항</div>
            <div className="relative flex items-start justify-between gap-10 w-full">
                    <AddNoticeForm />
                    <Notice />
                    <SuccessPopup />
                    {isOpenReceptionStatusPopup && <ReceptionStatus />}
            </div>
        </div>
    )
}

export default NoticeContainer;