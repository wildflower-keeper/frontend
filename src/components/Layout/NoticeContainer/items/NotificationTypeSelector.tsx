import { Checkbox } from "@mui/material"
import { useNoticeContext } from "../../NoticeProvider"

const NotificationTypeSelector = () => {
    const noticeContext = useNoticeContext();
    const { isEntirety, setIsEntirety } = noticeContext;
    return (
        <div className="flex justify-start gap-5 mb-3 border-b border-solid border-neutral-300">
            <button
                onClick={() => setIsEntirety(true)}
                className={`pr-5 ${isEntirety && 'text-[#19c23d] border-b-4 border-solid border-[#19c23d]'}`}>
                전체발송
            </button>
            <button
                onClick={() => setIsEntirety(false)}
                className={`pr-5 ${!isEntirety && 'text-[#19c23d] border-b-4 border-solid border-[#19c23d]'}`}>
                개별발송
            </button>
        </div>
    )
}

export default NotificationTypeSelector;