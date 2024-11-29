"use client"

// Compo
import NoticeList from "./NoticeList";
import NoticeHeader from "./NoticeHeader";
import PagenationButtonContainer from "@/components/Composition/PagenationButtonContainer";

// Utils
import { noticeList } from "@/api/v2/shelter-admin";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

// Types
import { NoticeListParam } from "@/api/v2/shelter-admin/type";

const Notice = () => {
    const [param, setParam] = useState<NoticeListParam>({
        pageNumber: 1,
        pageSize: 5,
    });
    const queryKey = useMemo(() => {
        return [...noticeList.queryKey(), ...Object.values(param)]
    }, [noticeList, param]);

    const {data} = useQuery({
        queryKey,
        queryFn: () => noticeList(param)
    });
    return (
        <div className="w-full flex flex-col items-center">
            <NoticeHeader />
            <NoticeList data={data?.items || []} />
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

export default Notice;