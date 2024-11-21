import NoticeInput from "./items/NoticeInput";

const NoticeForm = () => {
    return (
        <form className="flex flex-col gap-5">
            <NoticeInput id="title" label="제목" />
            <NoticeInput id="content" label="내용" />
        </form>
    )
}

export default NoticeForm;