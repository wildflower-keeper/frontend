import { FiPlus } from "react-icons/fi";
import OpenAddButton from "./items/OpenAddButton";
import OpenDeleteButton from "./items/OpenDeleteButton";
import userDeleteManagementStore from "@/store/useUserDeleteManagement";
import { buttonStyle } from "./items/OpenUserManagement";
import { useState } from "react";
import DeleteButton from "./items/deleteButton";
import FinalCheckButton from "./items/FinalCheckButton";
import SuccessPopup from "./items/SuccessPopup";

const UserManagementButtonContainer = () => {
    const { checkedUserList, closeDeleteUser } = userDeleteManagementStore();
    const [isOpenFinalCheck, setIsOpenFinalCheck] = useState(false);
    const onDeleteClick = () => {
        setIsOpenFinalCheck(true);
    }
    const onCancelDeleteClick = () => {
        closeDeleteUser();
        setIsOpenFinalCheck(false);
    }
    const isChecked = checkedUserList.length > 0;
    return (
        <>
            {
                // <SuccessPopup Message="정상적으로 이용자가 삭제되었습니다." />
                isOpenFinalCheck ? // 삭제 버튼을 누름
                    <FinalCheckButton onCancelDeleteClick={onCancelDeleteClick} />
                    :
                    (
                        isChecked ? // 선택된 유저가 있으면
                            <DeleteButton onCancelDeleteClick={onCancelDeleteClick} onDeleteClick={onDeleteClick} />
                            :
                            <div className="flex flex-row gap-2 px-3 py-1">
                                <OpenAddButton />
                                <OpenDeleteButton />
                            </div>
                    )
            }
        </>
    )
}

export default UserManagementButtonContainer;