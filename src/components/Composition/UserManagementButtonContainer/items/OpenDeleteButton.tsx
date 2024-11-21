import OpenUserManagement from "./OpenUserManagement";
import { useUserContext } from "@/components/Layout/UserManagementProvider";

//삭제 버튼
const OpenDeleteButton = () => {
    const userContext = useUserContext();
    const {isOpenDeleteUser, setIsOpenDeleteUser, checkedUserList} = userContext;
    const openDeleteUser = () => {
        if(isOpenDeleteUser && checkedUserList.length === 0) {
            setIsOpenDeleteUser(false);
            return;
        }
        if(!isOpenDeleteUser) {
            setIsOpenDeleteUser(true);
        }
    }
    return (
        <OpenUserManagement type={"삭제"} selected={isOpenDeleteUser} onClick={openDeleteUser} />
    )
};

export default OpenDeleteButton;