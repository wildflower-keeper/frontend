import Link from "next/link";
import { adminDataTypeList, gridCol } from "./admin.const"

const AdminHeader = () => {
    return (
        <>
            <div className="w-full flex justify-end">
                <Link href={"/adminList/createAdmin"} className="mb-2 px-4 py-1 border text-neutral-400 border-neutral-400 border-solid rounded-3xl">관리자 추가</Link>
            </div>
            <div className="py-3 grid grid-cols-7 bg-neutral-200 rounded-md font-bold"
                style={{
                    gridTemplateColumns: gridCol
                }}>
                {
                    adminDataTypeList.map((type, index) => (
                        <div key={index} className="basicRowStyle">{type}</div>
                    ))
                }
            </div>
        </>
    )
}

export default AdminHeader;