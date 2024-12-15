"use client"

import AddText from "./items/AddText";
import NotificationTypeSelector from "./items/NotificationTypeSelector";
import OpenSelectUserButton from "./items/OpenSelectUserButton";
import SelectedUserList from "./items/SelectedUserList";
import UploadImage from "./items/UploadImage";

const NoticeAddForm = () => {
    return (
        <div className="flex flex-col gap-5">
            <NotificationTypeSelector />
            <div className="flex gap-10">
                <AddText />
                <SelectedUserList />
            </div>
        </div>
    )
}

export default NoticeAddForm;