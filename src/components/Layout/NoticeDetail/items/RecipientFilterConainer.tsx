import FilterButton from "@/components/Composition/FilterButton";
import { Dispatch, SetStateAction } from "react";

const filterTypeList = [
    "전체 인원",
    "미확인 인원",
    "미참여 인원"
]

const RecipientFilterConainer = ({ setUserType, userType }: { setUserType: Dispatch<SetStateAction<number>>, userType: number }) => {
    return (
        <div className="flex gap-3 mb-3">
            {
                filterTypeList.map((type, index) => (
                    <FilterButton key={type} size="size-22" name={type} onClick={() => setUserType(index)} selected={index === userType} />
                ))
            }
        </div>
    )
}

export default RecipientFilterConainer;