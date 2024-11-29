import NoticeAddForm from "../NoticeAddForm";
import ReceptionStatusProvier from "../ReceptionStatusProvider";
import Notice from "./items/Notice";
import ReceptionStatus from "./items/Reception/ReceptionStatus";

const NoticeContainer = () => {
    return (
        <div>
            <div className="custom-page-name">공지사항</div>
            <div className="flex items-start justify-between gap-10 w-full relative">
                <ReceptionStatusProvier>
                    <NoticeAddForm />
                    <Notice />
                    <ReceptionStatus />
                </ReceptionStatusProvier>

            </div>
        </div>
    )
}

export default NoticeContainer;