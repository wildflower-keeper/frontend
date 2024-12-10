import { usePathname } from "next/navigation";
import { PAGE_ROUTE } from "../index.const";
import Link from "next/link";
import RouteItem from "./RouteItem";
import { useState } from "react";

const PageList = () => {
    const pathname = usePathname();
    const [isOpenNoticeDropdown, setIsOpenNoticeDropdown] = useState(false);
    return (
        <div className="grow flex flex-col items-start mt-10 pl-5">
            {PAGE_ROUTE.map(({ name, path, Icon, isNoticeToggle, isNoticeDropdown }, index) => {
                if (isNoticeDropdown && !isOpenNoticeDropdown) return null;
                const selected = pathname === path;
                return (
                    <div key={index} className="flex w-full relative">
                        {selected && <span className="absolute left-[-20px] bg-[#3f3f3f] w-1 h-full rounded-r-full" />}
                        {
                            isNoticeToggle ?
                                <div
                                    onClick={() => setIsOpenNoticeDropdown(prev => !prev)}
                                    key={path}
                                    className={`cursor-pointer basicSidebarbutton ${selected && 'bg-[#3f3f3f]'}`}
                                >
                                    <RouteItem Icon={Icon} name={name} selected={selected} />
                                </div>
                                :
                                <Link href={path} key={path} className={`basicSidebarbutton ${selected && 'bg-[#3f3f3f]'}`}>
                                    <RouteItem Icon={Icon} name={name} selected={selected} />
                                </Link>
                        }
                    </div>
                );
            })}
        </div>
    )
}

export default PageList;