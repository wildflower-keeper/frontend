"use client"

import { NoticeResponseType } from "@/api/v2/shelter-admin/type";
import { gridCol } from "./notice.const";
import { formatDateString } from "@/utils/string/date";

const NoticeList = ({data}: {data: NoticeResponseType[] | []}) => {
    return (
        <div className="w-full">
            {
                data.map(({ sendAt, title, contents, id }, index) => (
                    <div key={id} className="py-3 grid grid-cols-4 border-b border-solid border-neutral-200" style={{
                        gridTemplateColumns: gridCol
                    }}>
                        <div className="basicRowStyle">{index + 1}</div>
                        <div className="basicRowStyle">{formatDateString(sendAt, "yyyy.MM.dd HH:mm")}</div>
                        <div className="basicRowStyle">{title}</div>
                        <div className="h-fit flex items-center text-left">{contents}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default NoticeList;