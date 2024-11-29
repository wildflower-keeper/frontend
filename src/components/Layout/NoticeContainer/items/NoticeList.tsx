"use client"

import { NoticeListResponseType, NoticeResponseType } from "@/api/v2/shelter-admin/type";
import { gridCol } from "./notice.const";
import { formatDateString } from "@/utils/string/date";

// const data = [
//     {
//         createdAt: "24. 11. 25",
//         title: "식단",
//         content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등 오늘의 식단은 김치볶음밥 계란국 장조림 등등 "
//     },
//     {
//         createdAt: "24. 11. 25",
//         title: "식단",
//         content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등ssss"
//     },
//     {
//         createdAt: "24. 11. 25",
//         title: "식단",
//         content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등"
//     },
//     {
//         createdAt: "24. 11. 25",
//         title: "식단",
//         content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등"
//     }
// ]

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