import { create } from "zustand";

interface userDeleteManagementStoreType {
    isOpenDeleteUser: boolean,
    openDeleteUser: () => void,
    closeDeleteUser: () => void,
}

const userDeleteManagementStore = create<userDeleteManagementStoreType>(set => ({
    isOpenDeleteUser: false,
    openDeleteUser: () => set((state) => {
        if (!state.isOpenDeleteUser) return {
            isOpenDeleteUser: true
        }
        else {
            return {
                isOpenDeleteUser: false
            }
        }
    }),
    closeDeleteUser: () => set(() => ({
        isOpenDeleteUser: false
    })),
}));

export default userDeleteManagementStore;