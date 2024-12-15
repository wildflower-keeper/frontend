import { formatDateString } from "@/utils/string/date"
import { FaCheck } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"

const Info = ({title, content}: {title: string, content: string | number}) => {
    return (
        <div>
            <span className="font-bold">{title} </span>{content}
        </div>
    )
}

interface Props {
    id: number
    title: string
    contents: string
    createdAt: string
    isSurvey: boolean
}

const NoticeDetailHeader = ({id, title, contents, createdAt, isSurvey}: Props) => {
    return (
        <div className="flex gap-5 text-[15px]">
            <div className="flex flex-col gap-3 min-w-[60px]">
                <span>
                    개별공지
                </span>
                <span className="flex flex-col items-center">
                    참여조사
                    {isSurvey ? <FaCheck className="size-6 text-[#19c23d]" /> : <IoClose className="size-6 text-neutral-400" />}
                </span>
            </div>
            <div className="flex flex-col gap-3 max-w-[80%]">
                <div className="flex gap-8">
                    <Info title="NO." content={id} />
                    <Info title="날짜: " content={formatDateString(createdAt, "yyyy.MM.dd")} />
                    <Info title="시간: " content={formatDateString(createdAt, "HH:mm")} />
                </div>
                <Info title="제목: " content={title} />
                <Info title="내용: " content={contents} />
            </div>
        </div>
    )
}

export default NoticeDetailHeader;