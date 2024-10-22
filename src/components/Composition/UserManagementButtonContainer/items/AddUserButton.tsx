import { BsPlusLg } from "react-icons/bs";
import UserManagementButton from "./UserManagementButton";
import userManagementStore from "@/store/useUserManagement";

const AddUserButton = () => {
    const {openAddUser, isOpenAddUser} = userManagementStore();
    return (
        <UserManagementButton type={"추가"} selected={isOpenAddUser} onClick={openAddUser}>
            <BsPlusLg className="size-6" />
        </UserManagementButton>
    )
}

export default AddUserButton;