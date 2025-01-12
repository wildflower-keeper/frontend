import NoticeContainer from "../NoticeContainer"
import SuccessPopup from "./items/SuccessPopup";

const NoticeSendContainer = () => {
    return (
        <div>
            <div className="custom-page-name">공지사항 전송</div>
            <NoticeContainer />
            <SuccessPopup />
        </div>
    )
}

export default NoticeSendContainer;