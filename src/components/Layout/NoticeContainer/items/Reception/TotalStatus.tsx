import { NoticeReadInfoType } from "@/api/v2/shelter-admin/type";

const StatusTypes = [
    "총 인원",
    "읽은 사람",
    "안 읽은 사람"
]

const customRowStyle = "basicRowStyle w-full border-r-[1px] border-solid border-neutral-200"

const TotalStatus = ({noticeReadInfo}: {noticeReadInfo: NoticeReadInfoType | undefined}) => {
    return (
        <div>
            <div className="grid grid-cols-3 bg-neutral-100">
                {
                    StatusTypes.map((status, index) => (
                        <div key={index} className={`basicRowStyle text-[15px] ${index != 2 && customRowStyle}`}>
                            {status}
                        </div>
                    ))
                }
            </div>
            <div className="grid grid-cols-3 border-t-[1px] border-solid border-neutral-200">
                <div className={customRowStyle}>
                    {noticeReadInfo?.totalCount}
                </div>
                <div className={customRowStyle}>
                    {noticeReadInfo?.readCount}
                </div>
                <div className="basicRowStyle ">
                    {noticeReadInfo?.unReadCount}
                </div>
            </div>
        </div>
    )
}

export default TotalStatus;