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



// <div className="flex justify-between mb-3">
//             <div className="flex items-center gap-1">
//                 <Checkbox
//                     id="entirety"
//                     sx={checkBoxStyle}
//                     checked={isEntirety}
//                     onClick={() => setIsEntirety(true)}
//                 />
//                 <label htmlFor="entirety">전체발송</label>
//             </div>
//             <div className="flex items-center mr-5 gap-1">
//                 <Checkbox
//                     id="individual"
//                     sx={checkBoxStyle}
//                     checked={!isEntirety}
//                     onClick={() => setIsEntirety(false)}
//                 />
//                 <label htmlFor="individual">개별발송</label>
//             </div>
//         </div>
export default NotificationTypeSelector;