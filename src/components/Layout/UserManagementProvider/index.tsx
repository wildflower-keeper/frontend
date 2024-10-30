import { createContext, ReactNode, useContext, useState } from "react";

interface userAddManagementStoreType {
    isOpenAddUser: boolean,
    isAddSuccess: boolean,
    setIsOpenAddUser: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAddSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenDeleteUser: boolean,
    checkedUserList: number[],
    setCheckedUser: React.Dispatch<React.SetStateAction<number[]>>,
    setIsOpenDeleteUser: React.Dispatch<React.SetStateAction<boolean>>,
    isDeleteSuccess: boolean,
    setIsDeleteSuccess: React.Dispatch<React.SetStateAction<boolean>>,
}

export const userManagementContext = createContext<userAddManagementStoreType>({
    isOpenAddUser: false,
    isAddSuccess: false,
    setIsOpenAddUser: () => {},
    setIsAddSuccess: () => {},
    isOpenDeleteUser: false,
    checkedUserList: [],
    setCheckedUser: () => {},
    setIsOpenDeleteUser: () => {},
    isDeleteSuccess: false,
    setIsDeleteSuccess: () => {}
});

export const useUserContext = () => useContext(userManagementContext);

function UserManagementProvider({children}: {children: ReactNode}) {
    const [isOpenAddUser, setIsOpenAddUser] = useState(false);
    const [isAddSuccess, setIsAddSuccess] = useState(false);
    const [isOpenDeleteUser, setIsOpenDeleteUser] = useState(false);
    const [checkedUserList, setCheckedUser] = useState<number[]>([]);
    const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
    
    return (
    <userManagementContext.Provider 
    value={{
        isOpenAddUser, 
        setIsOpenAddUser, 
        isAddSuccess, 
        setIsAddSuccess,
        isOpenDeleteUser,
        setIsOpenDeleteUser,
        checkedUserList,
        setCheckedUser,
        isDeleteSuccess,
        setIsDeleteSuccess
    }}
    >
        {children}
    </userManagementContext.Provider>)
}

export default UserManagementProvider;