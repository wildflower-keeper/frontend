import { getCookie } from '@/utils/cookie';
import { create } from "zustand";

interface UseLoginStoreType {
  isLogin: boolean;
  setIsLogin: (newLoginInfo: boolean) => void;
};

const useLoginStore = create<UseLoginStoreType>((set) => {
  return {
    isLogin: Boolean(getCookie("authToken")),
    setIsLogin: (newLoginInfo) => {
      set({ isLogin: newLoginInfo });
    },
  };
});

export default useLoginStore;
