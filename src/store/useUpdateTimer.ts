// Utils
import { create } from "zustand";

interface useUpdateTimerStoreType {
  updateTimer: string;
  setUpdateTimer: (newTimer: string) => void;
}

const useUpdateTimer = create<useUpdateTimerStoreType>((set) => {
  return {
    updateTimer: "",
    setUpdateTimer: (newTimer: string) => {
      return set({ updateTimer: newTimer });
    },
  };
});

export default useUpdateTimer;
