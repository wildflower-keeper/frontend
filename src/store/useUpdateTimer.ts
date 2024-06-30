import { create } from "zustand";

interface useUpdateTimerStoreType {
  updateTimer: string;
  setUpdateTimer: (newTimer: string) => void;
}

const useUpdateTimer = create<useUpdateTimerStoreType>((set) => {
  return {
    updateTimer: "업데이트 시간을 나타냅니다.",
    setUpdateTimer: (newTimer: string) => {
      return set({ updateTimer: newTimer });
    },
  };
});

export default useUpdateTimer;
