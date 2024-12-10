import FilterButton from "@/components/Composition/FilterButton";

const RecipientFilterConainer = () => {
    return (
        <div className="flex gap-3 mb-3">
            <FilterButton size="size-22" name="모두보기" onClick={() => {}} />
            <FilterButton size="size-22" name="전체 공지" onClick={() => {}} />
            <FilterButton  size="size-22" name="개별 공지" onClick={() => {}} />
        </div>
    )
}

export default RecipientFilterConainer;