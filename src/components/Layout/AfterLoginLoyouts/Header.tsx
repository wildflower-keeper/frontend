"use client";

// Compo
import Button from "@/components/base/Button";
import { AiOutlineReload } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
// Utils
import React, { useMemo } from "react";
import { removeCookie } from "@/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/api/v1/shelter-admin";
import { HEADER_NAME } from "./index.const";
import { usePathname } from "next/navigation";

const AfterLoginHeader = () => {
  const { mutate } = useMutation({
    mutationKey: logout.mutationKey(),
    mutationFn: logout,
  });
  const pathName = usePathname();
  const headerName = useMemo(() => HEADER_NAME[pathName], [pathName]);
  const handleLogout = () => {
    mutate(undefined, {
      onSuccess: () => {
        removeCookie("authToken");
        window.location.href = "/auth";
      },
      onError: (error) => {
        return error;
      },
    });
  };

  return (
    <div className="px-10 flex justify-between h-20 items-center rounded-br-xl border bg-white">
      <p className="text-2xl font-bold">{headerName}</p>
      <div className="flex gap-7">
        <Button className="w-12 h-12 bg border rounded-lg">
          <AiOutlineReload size={24} color="#828282" className="m-auto" />
        </Button>
        <Button
          className="w-12 h-12 bg border rounded-lg"
          onClick={handleLogout}
        >
          <MdOutlineLogout size={26} color="#828282" className="m-auto" />
        </Button>
      </div>
    </div>
  );
};

export default AfterLoginHeader;
