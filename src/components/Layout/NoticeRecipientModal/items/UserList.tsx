import { UserItemType } from "@/api/v2/shelter-admin/type"
import { Checkbox } from "@mui/material";
import { useNoticeContext } from "../../NoticeProvider";
import { useEffect } from "react";

const checkBoxStyle = {
    color: '#c8ccd5', // 기본 색상 (연두색)
    '&.Mui-checked': {
        color: '#34c01f', // 체크된 색상 (연두색)
    },
    margin: 0, // 마진을 0으로 설정
    padding: 0, // 패딩을 0으로 설정
}

const UserList = ({ userItemList, isTotalSelected }: { userItemList: UserItemType[], isTotalSelected: boolean }) => {
    const noticeContext = useNoticeContext();
    const { setNoticeTarget, noticeTarget, setTotalUserNumber } = noticeContext;
    
    useEffect(() => {
        setTotalUserNumber(userItemList.length);
    }, [userItemList]);
    return (
        <div className="overflow-y-scroll h-[250px]">
            {userItemList.map(({ id, name, phoneNumber }, index) => {
                const selected = noticeTarget.some((item) => +Object.keys(item)[0] === id);
                if(!isTotalSelected && !selected) return null;
                return (
                <div key={id} className={`py-3 grid grid-cols-4 text-sm border-b border-solid border-neutral-200  ${selected && 'bg-neutral-100'}`}
                    style={{
                        gridTemplateColumns: "1fr 1fr 2fr 1fr"
                    }}
                >
                    <div className="basicRowStyle">{index + 1}</div>
                    <div className="basicRowStyle">{name}</div>
                    <div className="basicRowStyle">{phoneNumber}</div>
                    <button 
                    onClick={() => setNoticeTarget(id, name)}
                    className={`basicRowStyle px-2 border-2 border-solid rounded-md ${selected ? "border-[#19C23D]" : "border-neutral-400"}`}>
                        {selected ? "선택취소" : "선택하기"}
                    </button>
                </div>
            )})}
        </div>
    )
}

export default UserList;