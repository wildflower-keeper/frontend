import AddNoticeForm from "../AddNoticeForm";
import Notice from "./items/Notice";

const NoticeContainer = () => {
    return (
        <div>
            <div className="custom-page-name">공지사항</div>
            <div className="flex items-start justify-between gap-10 w-full">
                <AddNoticeForm />
                <Notice />
            </div>
        </div>
    )
}

export default NoticeContainer;