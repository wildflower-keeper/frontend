import { HiPlus } from "react-icons/hi2";
import { useNoticeContext } from "../../NoticeProvider";

const OpenSelectUserButton = () => {
    const noticeContext = useNoticeContext();
    const { setIsOpenUserSelectModal, isEntirety, noticeTarget } = noticeContext;

    if (isEntirety) return null;
    if (noticeTarget.length > 0) return null;
    return (
        <button onClick={() => setIsOpenUserSelectModal(true)}
            type="button"
            className="border border-1 border-solid border-neutral-300 rounded-md p-2 text-[#19C23D]">
            <div className="flex flex-col items-center">
                이용자 개별 선택
                <HiPlus className="bg-[#FFF0F0] w-5 h-5" />
            </div>
        </button>
    )
}

export default OpenSelectUserButton;