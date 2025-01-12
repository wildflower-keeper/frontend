"use client"

import NoticeForm from "./items/NoticeForm";
import NotificationTypeSelector from "./items/NotificationTypeSelector";
import SelectedUserList from "./items/SelectedUserList";
import UploadImage from "./items/UploadImage";

const NoticeContainer = () => {
    return (
        <div className="flex flex-col gap-5">
            <NotificationTypeSelector />
            <div className="flex gap-10">
                <NoticeForm />
                <div className="flex flex-col relative w-full">
                    <SelectedUserList />
                    <UploadImage />
                </div>
            </div>
        </div>
    )
}

export default NoticeContainer;