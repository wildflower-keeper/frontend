import { create } from "zustand";

interface userDeleteManagementStoreType {
    isOpenDeleteUser: boolean,
    isDeleteSuccess: boolean,
    checkedUserList: number[],
    checkUser: (id: number) => void,
    openDeleteUser: () => void,
    closeDeleteUser: () => void,
    openDeleteSuccessMessage: () => void,
    closeDeleteSuccessMessage: () => void,
}

const userDeleteManagementStore = create<userDeleteManagementStoreType>(set => ({
    isOpenDeleteUser: false,
    isDeleteSuccess: false,
    checkedUserList: [],
    checkUser: (id: number) => set((state) => {
        const newUserList = [...state.checkedUserList];
        if (newUserList.includes(id)) {
            const index = newUserList.indexOf(id);
            newUserList.splice(index, 1);
            return { ...state, checkedUserList: newUserList };
        }
        else return { ...state, checkedUserList: [...state.checkedUserList, id] };
    }),
    openDeleteUser: () => set((state) => {
        if (!state.isOpenDeleteUser) return {
            isOpenDeleteUser: true
        }
        else {
            return {
                isOpenDeleteUser: false,
                checkedUserList: []
            }
        }
    }),
    closeDeleteUser: () => set(() => ({
        isOpenDeleteUser: false,
        checkedUserList: []
    })),
    openDeleteSuccessMessage: () => set(() => ({
        isDeleteSuccess: true
    })),
    closeDeleteSuccessMessage: () => set(() => {
        return ({
        isDeleteSuccess: false
    })}),
}));

export default userDeleteManagementStore;