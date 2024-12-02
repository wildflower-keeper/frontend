import { Checkbox } from "@mui/material"
import { useNoticeContext } from "../../NoticeProvider"

const checkBoxStyle = {
    color: '#c8ccd5', // 기본 색상 (연두색)
    '&.Mui-checked': {
        color: '#34c01f', // 체크된 색상 (연두색)
    },
    margin: 0, // 마진을 0으로 설정
    padding: 0, // 패딩을 0으로 설정
}

const NotificationTypeSelector = () => {
    const noticeContext = useNoticeContext();
    const {isEntirety, setIsEntirety} = noticeContext;
    return (
        <div className="flex justify-between mb-3">
            <div className="flex items-center gap-1">
                <Checkbox
                    id="entirety"
                    sx={checkBoxStyle}
                    checked={isEntirety}
                    onClick={() => setIsEntirety(true)}
                />
                <label htmlFor="entirety">전체발송</label>
            </div>
            <div className="flex items-center mr-5 gap-1">
                <Checkbox
                    id="individual"
                    sx={checkBoxStyle}
                    checked={!isEntirety}
                    onClick={() => setIsEntirety(false)}
                />
                <label htmlFor="individual">개별발송</label>
            </div>
        </div>
    )
}

export default NotificationTypeSelector;