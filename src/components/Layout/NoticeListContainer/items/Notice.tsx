"use client"

// Compo
import PagenationButtonContainer from "@/components/Composition/PagenationButtonContainer";

// Utils
import { noticeList } from "@/api/v2/shelter-admin";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

// Types
import { NoticeListParam } from "@/api/v2/shelter-admin/type";
import { get } from "lodash";
import NoticeHeader from "@/components/Layout/NoticeListContainer/items/NoticeHeader";
import NoticeList from "@/components/Layout/NoticeListContainer/items/NoticeList";

const Notice = () => {
    const [param, setParam] = useState<NoticeListParam>({
        pageNumber: 1,
        pageSize: 5,
    });
    const queryKey = useMemo(() => {
        return [...noticeList.queryKey(), ...Object.values(param)]
    }, [noticeList, param]);

    const {data: noticeData} = useQuery({
        queryKey,
        queryFn: () => noticeList(param)
    });

    const noticeItemList = useMemo(
        () => get(noticeData, "items", []),
        [noticeData],
      );

      console.log(noticeItemList);
    return (
        <div className="w-full flex flex-col items-center text-sm">
            <NoticeHeader />
            <NoticeList data={noticeItemList} />
            <PagenationButtonContainer
                pageNumberHandler={(v) =>
                    setParam((prev) => ({ ...prev, pageNumber: v }))
                }
                lastPageNumber={noticeData?.pagination.lastPageNumber}
                pageNumber={param.pageNumber}
            />
        </div>
    )
}

export default Notice;