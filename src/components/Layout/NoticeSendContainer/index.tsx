import NoticeAddForm from "../AddNoticeForm"
import SuccessPopup from "./items/SuccessPopup";

const NoticeSendContainer = () => {
    return (
        <div>
            <div className="custom-page-name">공지사항 전송</div>
            <NoticeAddForm />
            <SuccessPopup />
        </div>
    )
}

export default NoticeSendContainer;