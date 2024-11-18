// Compo
import CreateAdminForm from "@/components/Layout/CreateAdminForm";
// Utils
//Types

const Page = () => {
  return (
    <div className="flex flex-col items center justify-center">
      <h1 className="authHeader">
        관리자 생성
      </h1>
      <CreateAdminForm />

    </div>
  )
}

export default Page;