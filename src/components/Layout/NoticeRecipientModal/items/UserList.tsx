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

const UserList = ({ userItemList }: { userItemList: UserItemType[] }) => {
    const noticeContext = useNoticeContext();
    const { setNoticeTarget, noticeTarget, setTotalUserNumber } = noticeContext;
    
    useEffect(() => {
        setTotalUserNumber(userItemList.length);
    }, [userItemList])
    return (
        <div className="overflow-y-scroll h-[200px]">
            {userItemList.map(({ id, name, phoneNumber }, index) => {
                const checked = noticeTarget.some((item) => +Object.keys(item)[0] === id);
                return (
                <div key={id} className="py-3 bg-white grid grid-cols-4 text-sm border-b border-solid border-neutral-200"
                    style={{
                        gridTemplateColumns: "1fr 1fr 2fr 1fr"
                    }}
                >
                    <div className="basicRowStyle">{index + 1}</div>
                    <div className="basicRowStyle">{name}</div>
                    <div className="basicRowStyle">{phoneNumber}</div>
                    <div className="basicRowStyle">
                        <Checkbox
                            sx={checkBoxStyle}
                            onChange={() => setNoticeTarget(id, name)}
                            checked={checked}
                        />
                    </div>
                </div>
            )})}
        </div>
    )
}

export default UserList;