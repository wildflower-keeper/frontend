interface Props {
    title: string
    content: string | number
    style?: string
}

const NoticeInfo = ({ title, content, style }: Props) => {
    return (
        <div className="">
            <span className={`font-bold ${style}`}>{title} </span>{content}
        </div>
    )
}

export default NoticeInfo;