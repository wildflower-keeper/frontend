import { gridCol, noticeDataTypeList } from "./notice.const";

const NoticeHeader = () => {
    return (
        <div className="py-3 grid grid-cols-4 bg-neutral-100 min-w-[500px] w-full rounded-md" style={{
            gridTemplateColumns: gridCol
        }}>
            {noticeDataTypeList.map((type, index) => (
                <div key={index} className="basicRowStyle">{type}</div>
            ))}
        </div>
    )
}

export default NoticeHeader;