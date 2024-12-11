import { useNoticeContext } from "../../NoticeProvider";

const SelectedUserList = () => {
    const noticeContext = useNoticeContext();
    const { isEntirety, noticeTarget, setIsOpenUserSelectModal, totalUserNumber } = noticeContext;
    if (isEntirety) return null;
    return (
        <div className="w-[400px]">
            <div className="flex items-center gap-2">
                <h1 className="font-bold">이용자 선택</h1>
                <span className="text-neutral-400">{noticeTarget.length}/{totalUserNumber}</span>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden grid grid-cols-5 gap-1 h-[100px]">
                {noticeTarget.map((userData) => {
                    const id = +Object.keys(userData)[0];
                    const name = Object.values(userData)[0];
                    return (
                        <span
                            className="text-sm border border-solid border-neutral-300 rounded-xl flex items-center justify-around gap-1 max-h-[22px]"
                            key={id}
                        >
                            {name}
                        </span>
                    )
                })}
            </div>
                <button
                    onClick={() => setIsOpenUserSelectModal(true)}
                    type="button"
                    className={`w-full rounded-xl px-1 py-2
                    ${noticeTarget.length === 0 ? "bg-[#19C23D] text-white" : "text-[#19C23D] border border-solid border-[#19C23D]"}`}>
                    {noticeTarget.length === 0 ? "추가" : "수정"} 
                </button>
        </div>
    )
}

export default SelectedUserList;