import { HiOutlineTrash } from "react-icons/hi2";
import UserManagementButton from "./UserManagementButton";

const DeleteUserButton = () => {
    const test = () => {}
    return (
        <UserManagementButton type={"삭제"} selected={false} onClick={test}>
            <HiOutlineTrash className="size-6" />
        </UserManagementButton>
    )
};

export default DeleteUserButton;