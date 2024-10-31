import { BsPlusLg } from "react-icons/bs";
import OpenUserManagement from "./OpenUserManagement";
import {  useUserContext } from "@/components/Layout/UserManagementProvider";
import { useCallback } from "react";

//추가 버튼
const OpenAddButton = () => {
    const userContext = useUserContext();
    const {isOpenAddUser, setIsOpenAddUser} = userContext;
    const openAddUser = useCallback(() => {
        setIsOpenAddUser(prev => !prev);
    }, [])
    return (
        <OpenUserManagement type={"추가"} selected={isOpenAddUser} onClick={openAddUser}>
            <BsPlusLg className="size-6" />
        </OpenUserManagement>
    )
}

export default OpenAddButton;