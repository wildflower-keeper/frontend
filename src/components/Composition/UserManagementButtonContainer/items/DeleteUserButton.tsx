import { HiOutlineTrash } from "react-icons/hi2";
import UserManagementButton from "./UserManagementButton";
import userDeleteManagementStore from "@/store/useUserDeleteManagement";

const DeleteUserButton = () => {
    const {openDeleteUser, isOpenDeleteUser} = userDeleteManagementStore();
    return (
        <UserManagementButton type={"삭제"} selected={isOpenDeleteUser} onClick={openDeleteUser}>
            <HiOutlineTrash className="size-6" />
        </UserManagementButton>
    )
};

export default DeleteUserButton;