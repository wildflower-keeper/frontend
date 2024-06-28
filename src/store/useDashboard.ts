import { create } from "zustand";

type userDashboardStoreType = {
  dashboard: "dashboard" | "management";
  setDashboard: (newDashboard: "dashboard" | "management") => void;
};

const useDashboardStore = create<userDashboardStoreType>((set) => ({
  dashboard: "dashboard",
  setDashboard: (newDashboard) => set({ dashboard: newDashboard }),
}));

export default useDashboardStore;
