import AddNoticeForm from "../AddNoticeForm";
import NoticeProvier from "../NoticeProvider";
import Notice from "./items/Notice";
import SuccessPopup from "./items/SuccessPopup";

const NoticeContainer = () => {
    return (
        <div>
            <div className="custom-page-name">공지사항</div>
            <div className="relative flex items-start justify-between gap-10 w-full">
                <NoticeProvier>
                    <AddNoticeForm />
                    <Notice />
                    <SuccessPopup />
                </NoticeProvier>
            </div>
        </div>
    )
}

export default NoticeContainer;