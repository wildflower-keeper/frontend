import { ReactNode, useState } from "react";
import StatusBadge from "./StatusBadge";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatus } from "@/api/v1/shelter-admin";
import { LocationStatusType } from "@/api/v1/shelter-admin/type";
import useHomelessListQueryKey from "@/store/useHomelessListQueryKey";

const StatusToggle = ({ children, id }: { children: ReactNode, id: number }) => {
    const onStatusClick = () => {
        setIsOpenStatus((prev) => !prev);
    }
    const queryClient = useQueryClient();
    const {homelessListQueryKey} = useHomelessListQueryKey();
    const { mutate } = useMutation({
        mutationKey: changeUserStatus.mutationKey(),
        mutationFn: (status: { locationStatus: LocationStatusType }) => changeUserStatus(id, status)
    })
    const changeStatus = (status: LocationStatusType) => {
        mutate({
            locationStatus: status
        }, {
            onSuccess: async (res) => {
                await queryClient.invalidateQueries({queryKey: homelessListQueryKey});
                setIsOpenStatus(true);
            }
        })
    }

    const statusList: LocationStatusType[] = ["IN_SHELTER", "OUT_SHELTER"];
    const [isOpenStatus, setIsOpenStatus] = useState(false);
    return (
        <div className="relative">
            <div onClick={onStatusClick} className="cursor-pointer">
                {children}
            </div>
            {
                isOpenStatus ?
                    <div className="absolute flex items-center gap-2 z-10 top-10 p-3 bg-white rounded-[20px] border border-solid border-[#e7e7e7]">
                        {statusList.map((status, index) => (
                            <div key={index} className="cursor-pointer" onClick={() => changeStatus(status)}>
                                <StatusBadge lastLocationStatus={status} />
                            </div>
                        ))}
                        <MdKeyboardArrowUp onClick={onStatusClick} className="text-gray-400 cursor-pointer" size={24} />
                    </div>
                    :
                    null
            }
        </div>
    )
};

export default StatusToggle;