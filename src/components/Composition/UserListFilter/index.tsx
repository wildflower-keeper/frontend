import { FilterType, StatusFilterType, StatusType } from "@/api/v1/shelter-admin/type";
import { useEffect, useState } from "react";

interface Props {
    filterHandler: (status: StatusType, filterType: FilterType, page: number) => void
}

const initStatusFilters: StatusFilterType[] = [
    {
        name: "전체",
        type: null,
        isSelected: true
    },
    {
        name: "외출",
        type: "OUT_SHELTER",
        isSelected: false
    },
    {
        name: "외박",
        type: "OVERNIGHT_STAY",
        isSelected: false
    },
    {
        name: "재실",
        type: "IN_SHELTER",
        isSelected: false
    },
    {
        name: "미확인",
        type: "UNCONFIRMED",
        isSelected: false
    },
]

const StatusFilter = ({ filterHandler }: Props) => {
    const [statusFilters, setStatusFilters] = useState<StatusFilterType[]>(initStatusFilters);

    const onStatusFilterClick = (index: number) => {
        setStatusFilters((prev) => {
            const newArray = prev.map((filter) => ({ ...filter }));
            if(newArray[index].isSelected) return newArray; // 이미 선택된 status일 때
            newArray.map((filter) => {
                if(filter.isSelected) filter.isSelected = false;
            });
            newArray[index].isSelected = true;
            return newArray;
        });
    }

    useEffect(() => {
        statusFilters.map((filter, index) => {
            if(filter.isSelected) {
                if(index === 0) filterHandler(filter.type, 'NONE', 1); //전체 필터일 때는 필터 적용 X
                else filterHandler(filter.type, 'InOutStatus', 1);
            }
        })
    }, [statusFilters]);

    return (
        <div className="flex items-center gap-3">
            {
                statusFilters.map((filter, index) => (
                    <button key={index} onClick={() => onStatusFilterClick(index)} className={`rounded-3xl px-3 py-1 border w-[75px]
                        border-solid border-neutral-200 ${filter.isSelected ? "bg-[#3f3f3f] text-white" : null}`}>
                        {filter.name}
                    </button>
                ))
            }
        </div>
    )
}

export default StatusFilter;