"use client"

import Notice from "@/components/Layout/NoticeListContainer/items/Notice";
import { useNoticeContext } from "@/components/Layout/NoticeProvider";
import NoticeFilterContainer from "./items/NoticeFilterContainer";

const NoticeListContainer = () => {
    const noticeContext = useNoticeContext();
    const { isOpenNoticeDetailPopup } = noticeContext;
    return (
        <div>
            <div className="custom-page-name">공지사항 이력</div>
            <NoticeFilterContainer />
            <div className="relative flex items-start justify-between gap-10 w-full">
                    <Notice />
            </div>
        </div>
    )
}

export default NoticeListContainer;