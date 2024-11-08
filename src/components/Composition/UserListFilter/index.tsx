import { Dispatch, SetStateAction } from "react";

interface UserListFilterProps {
    selecedStatusIndex: number,
    setSelectedStatusIndex: Dispatch<SetStateAction<number>>
}

const statusList = [
    "전체",
    "외출",
    "외박",
    "재실",
    "미확인",
]

const UserListFilter = ({ selecedStatusIndex, setSelectedStatusIndex }: UserListFilterProps) => {

    return (
        <div className="flex items-center gap-3">
            {
                statusList.map((status, index) => (
                    <button key={index} onClick={() => setSelectedStatusIndex(index)} className={`rounded-3xl px-3 py-1 border w-[75px]
                        border-solid border-neutral-200 ${selecedStatusIndex === index ? "bg-[#3f3f3f] text-white" : null}`}>
                        {status}
                    </button>
                ))
            }
        </div>
    )
}

export default UserListFilter;