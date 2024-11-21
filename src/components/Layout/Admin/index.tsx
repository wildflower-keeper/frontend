"use client"


import { AxiosError } from "axios";
// Compo
import AdminHeader from "./items/AdminHeader";
import AdminList from "./items/AdminList";
// Utils
import { adminList } from "@/api/v2/shelter-admin";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// Types

const Admin = () => {
    const { data, error } = useQuery({
        queryKey: adminList.queryKey(),
        queryFn: adminList,
    });

    const router = useRouter();

    useEffect(() => {
        if ((error as AxiosError)?.response?.status === 403) {
            router.push("adminList/403");
        }
    }, [error]);

    return (
        <div className="w-full min-w-[800px]">
            <p className="custom-page-name">관리자 리스트</p>
            <AdminHeader />
            <AdminList data={data} />
        </div>
    )
}

export default Admin;