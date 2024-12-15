import { usePathname } from "next/navigation";
import { PAGE_ROUTE } from "../index.const";
import Link from "next/link";
import RouteItem from "./RouteItem";
import { useState } from "react";

const PageList = () => {
    const pathname = usePathname();
    const [dropDonwIndex, setDropDonwIndex] = useState(-1);
    const onDropDownClick = (index: number) => {
        setDropDonwIndex(prev => prev === index ? -1 : index);
    }
    return (
        <div className="grow flex flex-col items-start mt-10 pl-5">
            {PAGE_ROUTE.map(({ name, path, Icon, subMenu }, index) => {
                const selected = pathname === path;
                return (
                    <div key={path} className="flex w-full relative">
                        {selected && <span className="absolute left-[-20px] bg-[#3f3f3f] w-1 h-full rounded-r-full" />}
                        {
                            subMenu ?
                                <div className="flex flex-col">
                                    <div
                                        onClick={() => onDropDownClick(index)}
                                        className={`cursor-pointer basicSidebarbutton ${selected && 'bg-[#3f3f3f]'}`}
                                    >
                                        <RouteItem Icon={Icon} name={name} selected={selected} />
                                    </div>
                                    {
                                        dropDonwIndex === index &&
                                        subMenu.map(({ name, path, Icon }) => {
                                            return (
                                                <Link href={path} key={path} className={`basicSidebarbutton ${selected && 'bg-[#3f3f3f]'}`}>
                                                    <RouteItem Icon={Icon} name={name} selected={selected} />
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <Link href={path} className={`basicSidebarbutton ${selected && 'bg-[#3f3f3f]'}`}>
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