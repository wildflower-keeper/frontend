import { redirect } from "next/navigation";

const isLogin = false;

const Home = () => {
  if (!isLogin) {
    redirect("/auth");
  }
};

export default Home;
