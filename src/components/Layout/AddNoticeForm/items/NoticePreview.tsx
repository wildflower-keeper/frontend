import Image from "next/image"

interface NoticeType {
    title: string
    content: string
}

const NoticePreview = ({title, content}: NoticeType) => {
    return (
        <div className="flex items-center bg-neutral-300 p-3 gap-2 rounded-md mb-5">
            <div className="w-6 h-6 bg-white rounded-md p-1">
                <Image
                    src="/assets/logos/wildflower_logo.png"
                    alt="아이콘"
                    width={50}
                    height={50}
                />
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="text-sm">{title || "제목을 입력해주세요."} <span className="text-xs text-neutral-500 break-words word-break">지금</span></h1>
                <p className="text-sm text-neutral-500 max-w-[270px] break-words word-break">{content || "내용을 입력해주세요."}</p>
            </div>
        </div>
    )
}

export default NoticePreview;