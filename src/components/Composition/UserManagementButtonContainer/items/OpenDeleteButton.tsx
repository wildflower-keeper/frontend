import { HiOutlineTrash } from "react-icons/hi2";
import OpenUserManagement from "./OpenUserManagement";
import userDeleteManagementStore from "@/store/useUserDeleteManagement";

//삭제 버튼
const OpenDeleteButton = () => {
    const {openDeleteUser, isOpenDeleteUser} = userDeleteManagementStore();
    return (
        <OpenUserManagement type={"삭제"} selected={isOpenDeleteUser} onClick={openDeleteUser}>
            <HiOutlineTrash className="size-6" />
        </OpenUserManagement>
    )
};

export default OpenDeleteButton;