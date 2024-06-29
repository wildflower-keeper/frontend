"use client";

import useLoginStore from "@/store/useLogin";
import { getCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const { isLogin, setIsLogin } = useLoginStore();
  useEffect(() => {
    if (!isLogin) {
      if (getCookie("authToken")) {
        setIsLogin(true);
        redirect("/dashboard");
      }
      if (!getCookie("authToken")) {
        redirect("/auth");
      }
    }
  }, [isLogin, getCookie]);
};

export default Home;
