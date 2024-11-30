import AddNoticeForm from "../AddNoticeForm";
import Notice from "./items/Notice";
import SuccessPopup from "./items/SuccessPopup";

const NoticeContainer = () => {
    return (
        <div>
            <div className="custom-page-name">공지사항</div>
            <div className="relative flex items-start justify-between gap-10 w-full">
                <AddNoticeForm />
                <Notice />
                <SuccessPopup />
            </div>
        </div>
    )
}

export default NoticeContainer;