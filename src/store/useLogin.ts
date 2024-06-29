import { create } from "zustand";

type useLoginStore = {
  isLogin: boolean;
  setIsLogin: (newLoginInfo: boolean) => void;
};

const useLoginStore = create<useLoginStore>((set) => ({
  isLogin: false,
  setIsLogin: (newLoginInfo) => set({ isLogin: newLoginInfo }),
}));

export default useLoginStore;
