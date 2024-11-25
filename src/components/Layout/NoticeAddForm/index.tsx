import NoticeInput from "./items/NoticeInput";

const NoticeAddForm = () => {
    return (
        <form className="flex flex-col gap-5">
            <NoticeInput id="title" label="제목" />
            <NoticeInput id="content" label="내용" isContent={true} />
        </form>
    )
}

export default NoticeAddForm;