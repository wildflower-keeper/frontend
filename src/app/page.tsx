import { redirect } from "next/navigation";

const isLogin = true;

const Home = () => {
  if (!isLogin) {
    redirect("/auth");
  }
  redirect("/dashboard");
};

export default Home;
