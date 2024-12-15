import { useNoticeContext } from "../NoticeProvider";
import UserListContainer from "./items/UserListContainer";

const NoticeRecipientModal = () => {
    const noticeContext = useNoticeContext();
    const { setIsOpenUserSelectModal, noticeTarget } = noticeContext;
    const selected = !(noticeTarget.length === 0);
    return (
        <div className="absolute w-[500px] h-[500px] top-[-100px] flex flex-col justify-between p-3 bg-white shadow-2xl rounded-xl z-10">
            <UserListContainer />
            <div className="w-full flex flex-col items-center">
                <button
                    disabled={!selected}
                    onClick={() => setIsOpenUserSelectModal(false)}
                    className={`text-white w-full rounded-md py-2 mt-8 ${selected ? "bg-[#00bf40]" : "bg-neutral-300"}`}>
                    확인
                </button>
            </div>
        </div>
    )
}

export default NoticeRecipientModal;