"use client"

import { useRouter } from "next/navigation";

const AdminCreateSuccess = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center mt-[20%] gap-2">
            <h1 className="text-xl font-bold">환영합니다.</h1>
            <h2 className="text-[#949494]">관리자가 생성되었습니다.</h2>
            <button onClick={() => router.push("/adminList")} className="w-80 py-3 text-white bg-[#00b226] rounded-md">확인</button>
        </div>
    )
}

export default AdminCreateSuccess;