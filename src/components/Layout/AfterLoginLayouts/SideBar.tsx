"use client";

// Compo
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "@/components/Composition/LogoutButton";

// Utils
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { EXTRA_PAGE_ROUTE, PAGE_ROUTE } from "./index.const";
import PinNumber from "./items/PinNumber";
import PageList from "./items/PageList";


const AfterLoginSideBar = () => {
  const pathname = usePathname();
  const [isOpenNotice, setIsOpenNotice] = useState(false);
  return (
    <div className="flex flex-col h-min-full bg-white py-5 w-64 border-r border-solid border-gray-200 min-w-[230px]">
      <div className=" w-40 h-10 mx-auto">
        <Image
          src="/assets/logos/wildflower_logo_with_name.png"
          alt="아이콘"
          width={300}
          height={300}
        />
      </div>
      <PageList />
      <div className="flex justify-center w-full">
      <PinNumber />
      </div>
      <div className="flex flex-col items-start w-full border-t border-solid border-gray-200 pb-5 pt-10 text-sm pl-5">
        {
          EXTRA_PAGE_ROUTE.map(({ name, path, Icon }, index) => {
            const selected = pathname === path;
            return (
            <div key={index} className="flex w-full relative">
              {selected && <span className="absolute left-[-20px] bg-[#3f3f3f] w-1 h-full rounded-r-full" />}
              <Link href={path} className={`flex gap-2 items-center basicSidebarbutton ${selected && "bg-[#3f3f3f] text-white"}`} >{Icon && <Icon size={22} />}{name}</Link>
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
