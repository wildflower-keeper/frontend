import { NoticeFilterType } from "@/api/v2/shelter-admin/type";
import { useEffect, useState } from "react";
import { noticeFilterType } from "./notice.const";
import FilterButton from "@/components/Composition/FilterButton";

interface Props {
    filterHandler: (filterType: NoticeFilterType, isGlobal: boolean, pageNumber: number) => void
}

const NoticeFilterContainer = ({ filterHandler }: Props) => {
    const [noticeFilterIndex, setNoticeFilterIndex] = useState(0);
    useEffect(() => {
        switch (noticeFilterIndex) {
            case 0:
                filterHandler("NONE", false, 1);
                break;
            case 1:
                filterHandler("GLOBAL_TYPE", true, 1);
                break;
            case 2:
                filterHandler("GLOBAL_TYPE", false, 1);
                break;
        }
    }, [noticeFilterIndex]);
    return (
        <div className="flex gap-3 mb-3">
            {
                noticeFilterType.map((noticeType, index) => (
                    <FilterButton
                        size=""
                        selected={noticeFilterIndex === index}
                        key={noticeType}
                        name={noticeType}
                        onClick={() => { setNoticeFilterIndex(index) }}
                    />
                ))
            }
        </div>
    )
}

export default NoticeFilterContainer;