import { FiPlus } from "react-icons/fi";
import AddUserButton from "./items/AddUserButton";
import DeleteUserButton from "./items/DeleteUserButton";

const UserManagementButtonContainer = () => {
    return (
        <div className="flex flex-row gap-3">
            <AddUserButton />
            <DeleteUserButton />
        </div>
    )
}

export default UserManagementButtonContainer;