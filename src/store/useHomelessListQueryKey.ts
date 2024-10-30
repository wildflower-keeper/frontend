import { FilterValuesType, HomelessPeopleListParam } from "@/api/v1/shelter-admin/type";
import { create } from "zustand";

interface useHomelessListQueryKeyType {
    homelessListQueryKey: string[],
    setHomelessListQueryKey: (queryKey: string[]) => void
}

const useHomelessListQueryKey = create<useHomelessListQueryKeyType>((set) => ({
    homelessListQueryKey: [],
    setHomelessListQueryKey: (queryKey) => set(() => ({
        homelessListQueryKey: queryKey
    }))
}));

export default useHomelessListQueryKey;