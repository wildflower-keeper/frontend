import ManagementContainer from "@/components/Layout/ManagementContainer";
import UserBoardContainer from "@/components/Layout/UserBoardContainer";
import UserCurrentSituation from "@/components/Layout/UserCurrentSituation";

const Page = () => {
  return (
    <div className="flex justify-between">
      <UserBoardContainer />
    </div>
  )
  // return <ManagementContainer />;
};

export default Page;
