"use client"

// Compo
import CreateAdminForm from "@/components/Layout/CreateAdminForm";
import AdminCreateSuccess from "@/components/Layout/CreateAdminForm/items/AdminCreateSuccess";
import { useState } from "react";
// Utils
//Types

const Page = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <>
      {
        isSuccess ?
          <AdminCreateSuccess />
          :
          <div className="flex flex-col items center justify-center">
            <h1 className="authHeader">
              관리자 생성
            </h1>
            <CreateAdminForm setIsSuccess={setIsSuccess}  />
          </div>
      }
    </>
  )
}

export default Page;