import NoticeAddForm from "../NoticeAddForm";
import NoticeProvider from "../NoticeProvider";
import Notice from "./items/Notice";
import ReceptionStatus from "./items/Reception/ReceptionStatus";

const NoticeContainer = () => {
    return (
        <div>
            <div className="custom-page-name">공지사항</div>
            <div className="flex items-start justify-between gap-10 w-full relative">
                <NoticeProvider>
                    <NoticeAddForm />
                    <Notice />
                    <ReceptionStatus />
                </NoticeProvider>

            </div>
        </div>
    )
}

export default NoticeContainer;