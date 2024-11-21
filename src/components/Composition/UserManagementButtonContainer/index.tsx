import OpenAddButton from "./items/OpenAddButton";
import OpenDeleteButton from "./items/OpenDeleteButton";
import { useCallback, useContext, useState } from "react";
import SuccessPopup from "./items/SuccessPopup";
import DeleteButton from "./items/DeleteButton";
import { useUserContext } from "@/components/Layout/UserManagementProvider";

const UserManagementButtonContainer = () => {
    const userContext = useUserContext();

    const {
        isAddSuccess,
        setIsAddSuccess,
        checkedUserList,
        setCheckedUser,
        setIsOpenDeleteUser,
        isDeleteSuccess,
        setIsDeleteSuccess
    } = userContext;

    const onCancelDeleteClick = useCallback(() => {
        setIsOpenDeleteUser(false);
        setCheckedUser([]);
    }, []);

    const closeAddSuccessMessage = useCallback(() => {
        setIsAddSuccess(false);
    }, []);

    const closeDeleteSuccessMessage = useCallback(() => {
        setIsDeleteSuccess(false);
    }, []);
    const isChecked = checkedUserList.length > 0;
    if (isAddSuccess) {
        return <SuccessPopup closeMessage={closeAddSuccessMessage} Message="정상적으로 이용자가 생성되었습니다." />
    }
    if (isDeleteSuccess) {
        return <SuccessPopup closeMessage={closeDeleteSuccessMessage} Message="정상적으로 이용자가 삭제되었습니다." />
    }
    return (
        <div className="flex flex-row gap-2 px-3 py-1 relative">
            <OpenAddButton />
            <OpenDeleteButton />
            {isChecked && <DeleteButton onCancelDeleteClick={onCancelDeleteClick} />}
        </div>
    )
}


export default UserManagementButtonContainer;