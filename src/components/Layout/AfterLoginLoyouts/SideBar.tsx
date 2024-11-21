"use client";

// Compo
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "@/components/Composition/LogoutButton";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
// Utils
import React from "react";
import { PAGE_ROUTE } from "./index.const";
import { usePathname } from "next/navigation";


const AfterLoginSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-min-full bg-white py-5 w-64 border-r border-solid border-gray-200 items-center">
      <div className=" w-40 h-10 mx-auto">
        <Image
          src="/assets/logos/wildflower_logo_with_name.png"
          alt="아이콘"
          width={300}
          height={300}
        />
      </div>
      <div className="grow flex flex-col items-start mt-10 pl-5">
        {PAGE_ROUTE.map(({ name, path, Icon }) => {
          const selected = pathname === path;
          return (
            <Link href={path} key={path} className={`w-48 px-2 py-3 rounded-md ${selected ? 'bg-[#3f3f3f]' : null}`}>
              {Icon && (
                <div className={`flex flex-row gap-4 ${selected ? 'text-white' : 'text-black'}`}>
                  <Icon
                    size={26}
                  />
                  {name}
                </div>
              )}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-start gap-4 w-full border-t border-solid border-gray-200 pb-5 pt-10 pl-10 text-sm">
        <Link href="/adminList" className="flex gap-2 items-center"><MdPersonOutline size={22} />관리자 리스트</Link>
        <Link href="" className="flex gap-2 items-center"><IoSettingsOutline size={22} />설정</Link>
        <LogoutButton />
      </div>
    </div>
  );
};

export default AfterLoginSideBar;