interface NoticeInput {
    id: string,
    label: string,
    isContent?: boolean,
}

const NoticeInput = ({id, label, isContent}: NoticeInput) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{label}</label>
            <input id={id} placeholder={`${label}을 입력해주세요.`} className={`${isContent && "pb-16"} border border-1 border-solid border-[#b3b3b3] w-[250px] rounded-md px-4 py-1`} />
        </div>
    )
}

export default NoticeInput;