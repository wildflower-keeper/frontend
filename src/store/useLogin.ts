import { create } from "zustand";

type useLoginStoreType = {
  isLogin: boolean;
  setIsLogin: (newLoginInfo: boolean) => void;
};

const useLoginStore = create<useLoginStoreType>((set) => {
  return {
    isLogin: false,
    setIsLogin: (newLoginInfo) => {
      set({ isLogin: newLoginInfo });
    },
  };
});

export default useLoginStore;
