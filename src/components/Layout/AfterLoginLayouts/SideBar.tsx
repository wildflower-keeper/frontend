"use client";

// Compo
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "@/components/Composition/LogoutButton";

// Utils
import React from "react";
import { usePathname } from "next/navigation";
import { EXTRA_PAGE_ROUTE, PAGE_ROUTE } from "./index.const";


const AfterLoginSideBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-min-full bg-neutral-100 py-5 w-64 border-r border-solid border-gray-200 pl-5">
      <div className=" w-40 h-10 mx-auto">
        <Image
          src="/assets/logos/wildflower_logo_with_name.png"
          alt="아이콘"
          width={300}
          height={300}
        />
      </div>
      <div className="grow flex flex-col items-start mt-10">
        {PAGE_ROUTE.map(({ name, path, Icon }, index) => {
          const selected = pathname === path;
          return (
            <div key={index} className="flex w-full relative">
              {selected && <span className="absolute left-[-20px] bg-[#3f3f3f] w-1 h-full rounded-r-full" />}
              <Link href={path} key={path} className={`basicSidbarbutton ${selected && 'bg-[#3f3f3f]'}`}>
                {Icon && (
                  <div className={`flex flex-row gap-4 ${selected ? 'text-white' : 'text-black'}`}>
                    <Icon
                      size={26}
                    />
                    {name}
                  </div>
                )}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-start w-full border-t border-solid border-gray-200 pb-5 pt-10 text-sm">
        {
          EXTRA_PAGE_ROUTE.map(({ name, path, Icon }, index) => {
            const selected = pathname === path;
            return (
            <div key={index} className="flex w-full relative">
              {selected && <span className="absolute left-[-20px] bg-[#3f3f3f] w-1 h-full rounded-r-full" />}
              <Link href={path} className={`flex gap-2 items-center basicSidbarbutton ${selected && "bg-[#3f3f3f] text-white"}`} >{Icon && <Icon size={22} />}{name}</Link>
            </div>
            )
          })
        }
        <LogoutButton />
      </div>
    </div>
  );
};

export default AfterLoginSideBar;
