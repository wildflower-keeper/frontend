import { HiOutlineTrash } from "react-icons/hi2";
import OpenUserManagement from "./OpenUserManagement";
import { useUserContext } from "@/components/Layout/UserManagementProvider";

//삭제 버튼
const OpenDeleteButton = () => {
    const userContext = useUserContext();
    const {isOpenDeleteUser, setIsOpenDeleteUser} = userContext;
    const openDeleteUser = () => {
        setIsOpenDeleteUser(prev => !prev);
    }
    return (
        <OpenUserManagement type={"삭제"} selected={isOpenDeleteUser} onClick={openDeleteUser}>
            <HiOutlineTrash className="size-6" />
        </OpenUserManagement>
    )
};

export default OpenDeleteButton;