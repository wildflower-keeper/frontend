// Compo
// Utils
import { useState } from "react";
import { formatDateString } from "@/utils/string/date";
import formatPhoneNumber from "@/utils/string/phone";
import { baseRowStyle, gridCol } from "./admin.const";
// Types
import { AdminDataType } from "@/api/v2/shelter-admin/type"
import DeletePopup from "./DeletePopup";

const AdminList = ({ data }: { data: AdminDataType[] | undefined }) => {
    const [selectedId, setSelectedId] = useState(-1);
    const [isOpenDeletePopup, setIsOpenDeletePopup] = useState(false);
    const deletePopupToggleClick = (id: number) => {
        setSelectedId((prev) => prev === id ? -1 : id);
    }
    const openDeletePopup = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsOpenDeletePopup(true);
        event.stopPropagation();
    }
    return (
        <div className="relative w-full">
            {
                data?.map(({ id, createdAt, name, phoneNumber, remark, hasAdminRole }: AdminDataType, index) => (
                    <div onClick={() => deletePopupToggleClick(id)} key={id} className={`cursor-pointer py-3 bg-white grid grid-cols-7 place-items-cente text-sm 
                    rounded-md ${selectedId === id ? "border-2 border-solid border-green-500 shadow-2xl" : "border-b border-solid border-neutral-200"}`}
                        style={{
                            gridTemplateColumns: gridCol
                        }}>
                        <div className={baseRowStyle}>{index + 1}</div>
                        <div className={`${baseRowStyle} ${hasAdminRole ? "bg-[#19C23D]" : "bg-[#777777]"} text-white rounded-md py-1 w-12`}>{hasAdminRole ? "마스터" : "일반"}</div>
                        <div className={baseRowStyle}>{formatDateString(createdAt, "yyyy. MM. dd")}</div>
                        <div className={baseRowStyle}>{name}</div>
                        <div className={baseRowStyle}>{remark}</div>
                        <div className={baseRowStyle}>{formatPhoneNumber(phoneNumber)}</div>
                        {
                            selectedId === id ?
                                <button onClick={openDeletePopup} className={`${baseRowStyle} px-2 py-1 rounded-2xl border border-solid border-red-500 text-red-500`}>삭제</button>
                                :
                                <button className={`${baseRowStyle} py-1 border text-neutral-400 border-neutral-400 border-solid rounded-3xl w-20`}>계정관리</button>
                        }
                    </div>
                ))
            }
            {isOpenDeletePopup && <DeletePopup selectedId={selectedId} setIsOpenDeletePopup={setIsOpenDeletePopup} />}
        </div>
    )
}

export default AdminList;