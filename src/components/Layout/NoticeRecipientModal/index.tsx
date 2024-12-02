import { useNoticeContext } from "../NoticeProvider";
import SelectedUserList from "./items/SelectedUserList";
import UserListContainer from "./items/UserListContainer";

const NoticeRecipientModal = () => {
    const noticeContext = useNoticeContext();
    const { setIsOpenUserSelectModal } = noticeContext;
    return (
        <div className="absolute flex flex-col p-3 bg-white shadow-2xl h-[500px] rounded-xl w-full z-10">
            <SelectedUserList />
            <UserListContainer />
            <div className="w-full flex flex-col items-center">
                <button
                    onClick={() => setIsOpenUserSelectModal(false)}
                    className="bg-[#00bf40] text-white w-[300px] rounded-md py-2 mt-8">
                    확인
                </button>
            </div>
        </div>
    )
}

export default NoticeRecipientModal;