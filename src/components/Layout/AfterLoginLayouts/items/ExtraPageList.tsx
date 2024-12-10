import Link from "next/link";
import { EXTRA_PAGE_ROUTE } from "../index.const";
import LogoutButton from "@/components/Composition/LogoutButton";
import { usePathname } from "next/navigation";

const ExtraPageList = () => {
    const pathname = usePathname();
    return (
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
    )
}

export default ExtraPageList;