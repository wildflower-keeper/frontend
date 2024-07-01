/* eslint-disable arrow-body-style */
import { create } from "zustand";

type userDashboardStoreType = {
  dashboard: "dashboard" | "management" | "emergency";
  // eslint-disable-next-line no-unused-vars
  setDashboard: (
    newDashboard: "dashboard" | "management" | "emergency",
  ) => void;
};

const useDashboardStore = create<userDashboardStoreType>((set) => ({
  dashboard: "dashboard",
  setDashboard: (newDashboard) => set({ dashboard: newDashboard }),
}));

export default useDashboardStore;
