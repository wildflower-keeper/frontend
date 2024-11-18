// Compo
import CreateAdminForm from "@/components/Layout/CreateAdminForm";
import Link from "next/link";
// Utils
//Types

const Page = () => {
  return (
    <div>
      리스트
      <Link href={"/adminList/createAdmin"}>관리자 생성</Link>
    </div>
  )
}

export default Page;