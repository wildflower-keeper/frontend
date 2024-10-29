import { create } from "zustand";

interface userAddManagementStoreType {
    isOpenAddUser: boolean,
    isAddSuccess: boolean,
    openAddUser: () => void,
    closeAddUser: () => void,
    openAddSuccessMessage: () => void,
    closeAddSuccessMessage: () => void,
}

const userAddManagementStore = create<userAddManagementStoreType>(set => ({
    isOpenAddUser: false,
    isAddSuccess: false,
    openAddUser: () => set((state) => {
        if (!state.isOpenAddUser) return {
            isOpenAddUser: true
        }
        else {
            return {
                isOpenAddUser: false
            }
        }
    }),
    closeAddUser: () => set(() => ({
        isOpenAddUser: false
    })),
    openAddSuccessMessage: () => set(() => ({
        isAddSuccess: true
    })),
    closeAddSuccessMessage: () => set(() => {
        return ({
        isAddSuccess: false
    })}),
}));

export default userAddManagementStore;