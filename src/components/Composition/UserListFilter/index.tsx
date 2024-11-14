import { Dispatch, SetStateAction, useState } from "react";

interface StatusFilterType {
    name: "전체" | "외출" | "외박" | "재실" | "미확인",
    type: "all" | "outing" | "sleepover" | "inShelter" | "unknown" | "isSelected",
    isSelected: boolean
}

interface Props {
    filterHandler: (filters: StatusFilterType, page: number) => void
}

const UserListFilter = ({ filterHandler }: Props) => {
    const [statusFilters, setStatusFilters] = useState<StatusFilterType[]>([
        {
            name: "전체",
            type: "all",
            isSelected: true
        },
        {
            name: "외출",
            type: "outing",
            isSelected: false
        },
        {
            name: "외박",
            type: "sleepover",
            isSelected: false
        },
        {
            name: "재실",
            type: "inShelter",
            isSelected: false
        },
        {
            name: "미확인",
            type: "unknown",
            isSelected: false
        },
    ]);

    const onStatusFilterClick = (index: number) => {
        setStatusFilters((prev) => {
            const newArray = prev.map((filter) => ({ ...filter }));
            if(index === 0) { // 전체 필터 선택 시
                newArray[0].isSelected = true;
                return newArray.map((_, index) => { // 나머지 필터 비선택 처리
                    if(index === 0) return newArray[0];
                    newArray[index].isSelected = false; 
                    return newArray[index]
                })
            }
            newArray[0].isSelected = false; // 그 외의 필터 선택 시
            if(!newArray[index].isSelected) {
                newArray[index].isSelected = true;
                return newArray;
            }
            if(newArray.filter((filter) => filter.isSelected).length > 1) { // 선택이 하나 이상 되어있을 때 취소 가능
                newArray[index].isSelected = false;
                return newArray;
            }
            return newArray;
        });
    }
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

export default UserListFilter;