import { FiPlus } from "react-icons/fi";
import OpenAddButton from "./items/OpenAddButton";
import OpenDeleteButton from "./items/OpenDeleteButton";
import { buttonStyle } from "./items/OpenUserManagement";
import { useCallback, useContext, useState } from "react";
import FinalCheckButton from "./items/FinalCheckButton";
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

    const [isOpenFinalCheck, setIsOpenFinalCheck] = useState(false);
    const onDeleteClick = useCallback(() => {
        setIsOpenFinalCheck(true);
    }, []);

    const onCancelDeleteClick = useCallback(() => {
        setIsOpenDeleteUser(false);
        setIsOpenFinalCheck(false);
        setCheckedUser([]);
    }, []);

    const closeAddSuccessMessage = useCallback(() => {
        setIsAddSuccess(false);
    }, []);

    const closeDeleteSuccessMessage = useCallback(() => {
        setIsDeleteSuccess(false);
    }, []);
    const isChecked = checkedUserList.length > 0;
    if (isChecked) { // 삭제할 사용자가 선택된 상태
        if (isOpenFinalCheck) return <FinalCheckButton onCancelDeleteClick={onCancelDeleteClick} /> // 최종 삭제 확인 버튼
        return <DeleteButton onCancelDeleteClick={onCancelDeleteClick} onDeleteClick={onDeleteClick} /> // 삭제 버튼
    }
    if (isAddSuccess) {
        return <SuccessPopup closeMessage={closeAddSuccessMessage} Message="정상적으로 이용자가 생성되었습니다." />
    }
    if (isDeleteSuccess) {
        return <SuccessPopup closeMessage={closeDeleteSuccessMessage} Message="정상적으로 이용자가 삭제되었습니다." />
    }
    return (
        <div className="flex flex-row gap-2 px-3 py-1">
            <OpenAddButton />
            <OpenDeleteButton />
        </div>
    )
}


export default UserManagementButtonContainer;