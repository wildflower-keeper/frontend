interface NoticeInput {
    id: string,
    label: string
}

const NoticeInput = ({id, label}: NoticeInput) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{label}</label>
            <input id={id} placeholder={`${label}을 입력해주세요.`} className="border-2 border-solid w-[250px] rounded-md px-4 py-1" />
        </div>
    )
}

export default NoticeInput;