// Compo
import { FaCheck } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import NoticeInfo from "./NoticeInfo"

// Utils
import { formatDateString } from "@/utils/string/date"

// Types


interface Props {
    id: number
    title: string
    contents: string
    createdAt: string
    isSurvey: boolean
}

const NoticeDetailHeader = ({ id, title, contents, createdAt, isSurvey }: Props) => {
    return (
        <div className="flex gap-1 text-[15px]">
            <div className="flex flex-col gap-3 min-w-[60px]">
                <span>
                    개별공지
                </span>
                <span className="flex flex-col items-center">
                    참여조사
                    {isSurvey ? <FaCheck className="size-6 text-[#19c23d]" /> : <IoClose className="size-6 text-neutral-400" />}
                </span>
            </div>
            <div className="flex flex-col gap-3 max-w-[80%] border-l border-solid border-neutral-200 pl-2">
                <div className="flex gap-8 border-b border-solid border-neutral-200 w-full">
                    <NoticeInfo title="NO." content={id} />
                    <NoticeInfo title="날짜: " content={formatDateString(createdAt, "yyyy.MM.dd")} />
                    <NoticeInfo title="시간: " content={formatDateString(createdAt, "HH:mm")} />
                </div>
                <div className="border-b border-solid border-neutral-200 w-full">
                    <NoticeInfo title="제목: " content={title} />
                </div>
                <div className="border-b border-solid border-neutral-200 w-full">
                    <NoticeInfo title="내용: " content={contents} />
                </div>
            </div>
        </div>
    )
}

export default NoticeDetailHeader;