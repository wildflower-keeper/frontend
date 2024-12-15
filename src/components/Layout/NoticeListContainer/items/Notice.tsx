"use client";

// Compo
import PagenationButtonContainer from "@/components/Composition/PagenationButtonContainer";

// Utils
import { noticeList } from "@/api/v2/shelter-admin";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useMemo } from "react";

// Types
import { NoticeListParam, NoticeListResponseType } from "@/api/v2/shelter-admin/type";
import { get } from "lodash";
import NoticeHeader from "@/components/Layout/NoticeListContainer/items/NoticeHeader";
import NoticeList from "@/components/Layout/NoticeListContainer/items/NoticeList";
import NoticeFilterContainer from "./NoticeFilterContainer";

const Notice = () => {
    const [param, setParam] = useState<NoticeListParam>({
        pageNumber: 1,
        pageSize: 5,
        filterType: "NONE",
        isGlobal: true,
    });

    const [previousData, setPreviousData] = useState<NoticeListResponseType | null>(null);

    const queryKey = useMemo(() => {
        return [...noticeList.queryKey(), ...Object.values(param)];
    }, [param]);

    const { data: noticeData } = useQuery({
        queryKey,
        queryFn: () => noticeList(param),
    });

    useEffect(() => {
        if (noticeData) {
            setPreviousData(noticeData);
        }
    }, [noticeData]);

    const noticeItemList = useMemo(
        () => get(noticeData, "items", previousData?.items || []),
        [noticeData, previousData],
    );

    return (
        <div className="w-full flex flex-col items-center text-sm">
            <div className="w-full flex justify-start">
                <NoticeFilterContainer
                    filterHandler={(filterType, isGlobal) =>
                        setParam((prev) => ({
                            ...prev,
                            filterType,
                            isGlobal,
                            pageNumber: 1,
                        }))
                    }
                />
            </div>
            <NoticeHeader />
            <NoticeList data={noticeItemList} />
            <button
                className="w-[400px] bg-neutral-200 py-2 rounded-md border border-solid border-neutral-400 mt-2"
                onClick={() =>
                    setParam((prev) => ({ ...prev, pageSize: prev.pageSize + 5 }))
                }
            >
                더 불러오기
            </button>
        </div>
    );
};

export default Notice;
