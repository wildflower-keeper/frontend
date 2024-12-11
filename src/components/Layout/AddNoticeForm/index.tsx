"use client"

import AddText from "./items/AddText";
import NotificationTypeSelector from "./items/NotificationTypeSelector";
import UploadImage from "./items/UploadImage";

const NoticeAddForm = () => {
    return (
        <div className="flex flex-col gap-5">
            <NotificationTypeSelector />
            <div className="flex gap-10">
                <AddText />
                <UploadImage />
            </div>
        </div>
    )
}

export default NoticeAddForm;