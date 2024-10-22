import { create } from "zustand";

interface userManagementStoreType {
    isOpenAddUser: boolean,
    openAddUser: () => void,
    closeAddUser: () => void,
}

const userManagementStore = create<userManagementStoreType>(set => ({
    isOpenAddUser: false,
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
}));

export default userManagementStore;