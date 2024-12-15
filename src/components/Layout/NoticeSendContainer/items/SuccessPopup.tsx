"use client"

import { useNoticeContext } from "../../NoticeProvider";

const SuccessPopup = () => {
    const noticeContext = useNoticeContext();
    const { isOpenSuccessPopup, setIsOpenSuccessPopup } = noticeContext;
    if (!isOpenSuccessPopup) return null;
    return (
        <div className="absolute bg-white w-[350px] h-[100px] rounded-md flex flex-col items-center shadow-xl gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1>전송이 완료되었습니다.</h1>
            <button
                onClick={() => { setIsOpenSuccessPopup(false) }}
                className="bg-[#00b226] text-white w-[200px] py-2 rounded-md">
                확인
            </button>
        </div>
    )
}

export default SuccessPopup;