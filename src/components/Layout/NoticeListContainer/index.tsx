"use client"

// Compo
import Notice from "@/components/Layout/NoticeListContainer/items/Notice";
import NoticeDetail from "../NoticeDetail";

// Utils
import { useNoticeContext } from "@/components/Layout/NoticeProvider";

// Types


const NoticeListContainer = () => {
    const noticeContext = useNoticeContext();
    const { isOpenNoticeDetailPopup } = noticeContext;
    return (
        <div>
            <div className="custom-page-name">공지사항 이력</div>
            <div className="relative flex items-start justify-between gap-10 w-full">
                    <Notice />
                    {isOpenNoticeDetailPopup && <NoticeDetail />}
            </div>
        </div>
    )
}

export default NoticeListContainer;