"use client";

// Compo
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "@/components/Composition/LogoutButton";
// Utils
import React from "react";
import { PAGE_ROUTE } from "./index.const";
import { usePathname } from "next/navigation";


const AfterLoginSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-min-full bg-white py-5 w-64 border border-r border-solid border-gray-200 items-center">
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
      <LogoutButton />
    </div>
  );
};

export default AfterLoginSideBar;
