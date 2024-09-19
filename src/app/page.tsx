"use client";

import useLoginStore from "@/store/useLogin";
import { getCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const { isLogin } = useLoginStore();

  useEffect(() => {
    if (!isLogin) return redirect("/auth");

    return redirect("/dashboard");
  }, [isLogin, getCookie]);
};

export default Home;
