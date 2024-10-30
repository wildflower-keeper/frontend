import { BsPlusLg } from "react-icons/bs";
import UserManagementButton from "./UserManagementButton";
import userAddManagementStore from "@/store/useUserAddManagement";

const AddUserButton = () => {
    const {openAddUser, isOpenAddUser} = userAddManagementStore();
    return (
        <UserManagementButton type={"추가"} selected={isOpenAddUser} onClick={openAddUser}>
            <BsPlusLg className="size-6" />
        </UserManagementButton>
    )
}

export default AddUserButton;