"use client";

// Compo
import Image from "next/image";
import Link from "next/link";
// Utils
import React from "react";
import { PAGE_ROUTE } from "./index.const";
import { usePathname } from "next/navigation";

const AfterLoginSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-min-full bg-white pt-5 w-24">
      <div className=" w-10 h-10 mx-auto">
        <Image
          src="/assets/logos/wildflower_logo.png"
          alt="아이콘"
          width={40}
          height={40}
        />
      </div>
      <div className="grow flex flex-col items-center gap-8 mt-48">
        {PAGE_ROUTE.map(({ path, Icon }) => {
          return (
            <Link href={path} key={path}>
              {Icon && (
                <Icon
                  size={26}
                  color={pathname === path ? "#666666" : "#CCCCCC"}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AfterLoginSideBar;
