import { useNoticeContext } from "../../NoticeProvider";

const SelectedUserList = () => {
    const noticeContext = useNoticeContext();
    const { isEntirety, noticeTarget, setIsOpenUserSelectModal, totalUserNumber } = noticeContext;
    if(isEntirety || noticeTarget.length === 0) return null;
    return (
        <div>
            <div className="flex items-center gap-2">
                    <h1 className="font-bold">이용자 선택</h1>
                    <span className="text-neutral-400">{noticeTarget.length}/{totalUserNumber}</span>
                </div>
            <div className="overflow-y-scroll overflow-x-hidden grid grid-cols-5 gap-1 h-[50px]">
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
            <div className="w-full flex justify-end m-2">
                <button 
                onClick={() => setIsOpenUserSelectModal(true)}
                type="button" 
                className="text-[#19C23D] border border-solid border-[#19C23D] rounded-xl px-1">수정</button>
            </div>
        </div>
    )
}

export default SelectedUserList;