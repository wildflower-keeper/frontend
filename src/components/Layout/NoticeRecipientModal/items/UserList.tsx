// Compo
import { useNoticeContext } from "../../NoticeProvider";

// Utils
import { useEffect } from "react";

// Types
import { UserItemType } from "@/api/v2/shelter-admin/type"

const UserList = ({ userItemList, isTotalSelected }: { userItemList: UserItemType[], isTotalSelected: boolean }) => {
    const noticeContext = useNoticeContext();
    const { checkUser, noticeTarget, setTotalUserNumber } = noticeContext;
    
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
                    onClick={() => checkUser(id, name)}
                    className={`basicRowStyle px-2 border-2 border-solid rounded-md ${selected ? "border-[#19C23D]" : "border-neutral-400"}`}>
                        {selected ? "선택취소" : "선택하기"}
                    </button>
                </div>
            )})}
        </div>
    )
}

export default UserList;