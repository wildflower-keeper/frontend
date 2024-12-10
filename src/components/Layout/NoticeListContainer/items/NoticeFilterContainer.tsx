import FilterButton from "./FilterButton";

const NoticeFilterList = [
    {
        title: "ㅁ"
    }
]

const NoticeFilterContainer = () => {
    return (
        <div className="flex gap-3 mb-3">
            <FilterButton name="모두보기" onClick={() => {}} />
            <FilterButton name="전체 공지" onClick={() => {}} />
            <FilterButton name="개별 공지" onClick={() => {}} />
        </div>
    )
}

export default NoticeFilterContainer;