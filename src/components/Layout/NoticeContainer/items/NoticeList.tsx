"use client"

import PagenationButtonContainer from "@/components/Composition/PagenationButtonContainer";
import { gridCol } from "./notice.const";
import { useState } from "react";
import { NoticeListParam } from "@/api/v2/shelter-admin/type";

const data = [
    {
        createdAt: "24. 11. 25",
        title: "식단",
        content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등 오늘의 식단은 김치볶음밥 계란국 장조림 등등 "
    },
    {
        createdAt: "24. 11. 25",
        title: "식단",
        content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등"
    },
    {
        createdAt: "24. 11. 25",
        title: "식단",
        content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등"
    },
    {
        createdAt: "24. 11. 25",
        title: "식단",
        content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등"
    }
]

const NoticeList = () => {
    const [param, setParam] = useState<NoticeListParam>({
        pageNumber: 1,
        pageSize: 5,
    });
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="w-full">
                {
                    data.map(({ createdAt, title, content }, index) => (
                        <div key={index} className="py-3 grid grid-cols-4 border-b border-solid border-neutral-200" style={{
                            gridTemplateColumns: gridCol
                        }}>
                            <div className="basicRowStyle">{index + 1}</div>
                            <div className="basicRowStyle">{createdAt}</div>
                            <div className="basicRowStyle">{title}</div>
                            <div className="basicRowStyle">{content}</div>
                        </div>
                    ))
                }
            </div>
            <PagenationButtonContainer
                pageNumberHandler={(v) =>
                    setParam((prev) => ({ ...prev, pageNumber: v }))
                }
                lastPageNumber={1}
                pageNumber={param.pageNumber}
            />
        </div>
    )
}

export default NoticeList;