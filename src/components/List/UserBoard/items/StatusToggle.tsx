import { ReactNode, useState } from "react";
import StatusBadge from "./StatusBadge";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatus, homelessPeopleList } from "@/api/v1/shelter-admin";
import { LocationStatusType } from "@/api/v1/shelter-admin/type";
import Loading from "@/components/Composition/Loading";

const StatusToggle = ({ children, id }: { children: ReactNode, id: number }) => {
    const onStatusClick = () => {
        setIsOpenStatus((prev) => !prev);
    }
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationKey: changeUserStatus.mutationKey(),
        mutationFn: (status: { locationStatus: LocationStatusType }) => changeUserStatus(id, status)
    })

    const [loadingStatus, setLoadingStatus] = useState(-1);
    const changeStatus = (status: LocationStatusType, index: number) => {
        setLoadingStatus(index);
        mutate({
            locationStatus: status
        }, {
            onSuccess: async (res) => {
                await new Promise(resolve => setTimeout(resolve, 1000));
                queryClient.invalidateQueries({queryKey: [...homelessPeopleList.queryKey()]});
                
            },
            onError: (error) => {
                console.error(error);
            },
            onSettled: () => {
                setLoadingStatus(-1);
            }
        })
    }

    const statusList: LocationStatusType[] = ["IN_SHELTER", "OUT_SHELTER"];
    const [isOpenStatus, setIsOpenStatus] = useState(false);
    return (
        <div className="relative">
            <button onClick={onStatusClick}>
                {children}
            </button>
            {
                isOpenStatus &&
                <div className="absolute flex items-center gap-2 z-10 top-10 p-3 bg-white rounded-[20px] border border-solid border-[#e7e7e7]">
                    {
                        statusList.map((status, index) => (
                            loadingStatus === index ?
                                <Loading loadingStyle="size-4 mx-[29px]" />
                                :
                                <button key={index} disabled={loadingStatus != -1} onClick={() => changeStatus(status, index)}>
                                    <StatusBadge lastLocationStatus={status} />
                                </button>
                        ))}
                    <MdKeyboardArrowUp onClick={onStatusClick} className="text-gray-400 cursor-pointer" size={24} />
                </div>
            }
        </div>
    )
};

export default StatusToggle;