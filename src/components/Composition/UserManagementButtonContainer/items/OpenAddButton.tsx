import { BsPlusLg } from "react-icons/bs";
import OpenUserManagement from "./OpenUserManagement";
import userAddManagementStore from "@/store/useUserAddManagement";

//추가 버튼
const OpenAddButton = () => {
    const {openAddUser, isOpenAddUser} = userAddManagementStore();
    return (
        <OpenUserManagement type={"추가"} selected={isOpenAddUser} onClick={openAddUser}>
            <BsPlusLg className="size-6" />
        </OpenUserManagement>
    )
}

export default OpenAddButton;