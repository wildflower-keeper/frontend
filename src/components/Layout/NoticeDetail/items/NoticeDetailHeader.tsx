const Info = ({title, content}: {title: string, content: string}) => {
    return (
        <div>
            <span className="font-bold">{title} </span>{content}
        </div>
    )
}

const NoticeDetailHeader = () => {
    return (
        <div className="flex gap-5 text-[15px]">
            <div className="flex flex-col gap-3 min-w-[60px]">
                <span>
                    개별공지
                </span>
                <span>
                    참여조사
                </span>
            </div>
            <div className="flex flex-col gap-3 max-w-[80%]">
                <div className="flex gap-8">
                    <Info title="NO." content="24" />
                    <Info title="날짜: " content="2024. 11. 05" />
                    <Info title="시간: " content="19:48" />
                </div>
                <Info title="제목: " content="급식시간 30분 전입니다. 식당으로 가주세요" />
                <Info title="내용: " content="국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥국밥" />
            </div>
        </div>
    )
}

export default NoticeDetailHeader;