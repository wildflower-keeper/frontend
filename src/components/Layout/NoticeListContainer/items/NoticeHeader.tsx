// Compo

// Utils
import { gridCol, noticeDataTypeList } from "./notice.const";

// Types

const NoticeHeader = () => {
    return (
        <div className="py-3 grid grid-cols-6 bg-neutral-100 min-w-[800px] w-full rounded-md" style={{
            gridTemplateColumns: gridCol
        }}>
            {noticeDataTypeList.map((type, index) => (
                <div key={index} className="basicRowStyle">{type}</div>
            ))}
        </div>
    )
}

export default NoticeHeader;