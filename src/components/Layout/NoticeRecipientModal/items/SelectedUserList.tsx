import { useNoticeContext } from "../../NoticeProvider";
import CloseButton from "@/components/base/CloseButton";
import { useCallback } from "react";

const SelectedUserList = () => {
    const noticeContext = useNoticeContext();
    const { noticeTarget, setNoticeTarget, setIsOpenUserSelectModal, targetInit, totalUserNumber } = noticeContext;
    const onCloseClick = useCallback(() => {
        targetInit();
        setIsOpenUserSelectModal(false);
    }, [])
    return (
        <div>
            < div className="flex flex-row justify-between" >
                <div className="flex items-center gap-2">
                    <h1 className="font-bold">이용자 선택</h1>
                    <span className="text-neutral-400">{noticeTarget.length}/{totalUserNumber}</span>
                </div>
                <CloseButton onClick={onCloseClick} size={6} />
            </div >
            <div className="overflow-y-scroll overflow-x-hidden grid grid-cols-5 gap-1 h-[50px]">
                {noticeTarget.map((userData) => {
                    const id = +Object.keys(userData)[0];
                    const name = Object.values(userData)[0];
                    return (
                        <button
                            onClick={() => setNoticeTarget(id, name)}
                            className="text-sm border border-solid rounded-xl flex items-center justify-around gap-1 p-[2px] max-h-[22px]"
                            key={id}
                        >
                            {name}
                            <CloseButton size={4} />
                        </button>
                    )
                })}
            </div>

        </div>
    )
}

export default SelectedUserList;