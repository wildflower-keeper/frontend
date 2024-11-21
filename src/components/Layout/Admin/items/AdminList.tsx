// Compo
// Utils
import { useState } from "react";
import { formatDateString } from "@/utils/string/date";
import formatPhoneNumber from "@/utils/string/phone";
import { baseRowStyle, gridCol } from "./admin.const";
// Types
import { AdminDataType } from "@/api/v2/shelter-admin/type"

const AdminList = ({data}: {data: AdminDataType[] | undefined}) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            {
                data?.map(({ id, createdAt, name, phoneNumber, remark }: AdminDataType, index) => (
                    <div key={id} className={`py-3 bg-white grid grid-cols-7 place-items-cente text-sm 
                    rounded-md ${selectedIndex === index ? "border-2 border-solid border-green-500 shadow-2xl" : "border-b border-solid border-neutral-200"}`}
                        style={{
                            gridTemplateColumns: gridCol
                        }}>
                        <div className={baseRowStyle}>{index + 1}</div>
                        <div className={`${baseRowStyle} bg-[#777777] text-white rounded-md py-1 w-12`}>일반</div>
                        <div className={baseRowStyle}>{formatDateString(createdAt, "yyyy. MM. dd")}</div>
                        <div className={baseRowStyle}>{name}</div>
                        <div className={baseRowStyle}>{remark}</div>
                        <div className={baseRowStyle}>{formatPhoneNumber(phoneNumber)}</div>
                        <button onClick={() => setSelectedIndex(index)} className={`${baseRowStyle} py-1 border text-neutral-400 border-neutral-400 border-solid rounded-3xl w-20`}>계정관리</button>
                    </div>
                ))
            }
        </>
    )
}

export default AdminList;