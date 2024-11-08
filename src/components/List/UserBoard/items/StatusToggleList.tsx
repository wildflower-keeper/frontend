import { changeUserStatus, homelessPeopleList } from "@/api/v1/shelter-admin";
import { LocationStatusType } from "@/api/v1/shelter-admin/type";
import Loading from "@/components/Composition/Loading";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { MdKeyboardArrowUp } from "react-icons/md";

interface StatusToggleListProps {
    id: number, 
}

const StatusToggleList = ({id}: StatusToggleListProps) => {
    const [selectedStauts, setSelectedStatus] = useState(-1);
    const statusList: LocationStatusType[] = ["IN_SHELTER", "OUT_SHELTER"];

    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationKey: changeUserStatus.mutationKey(),
        mutationFn: (status: { locationStatus: LocationStatusType }) => changeUserStatus(id, status)
    });

    const changeStatus = (status: LocationStatusType, index: number) => {
        setSelectedStatus(index);
        mutate({
            locationStatus: status
        }, {
            onSuccess: async (res) => {
                queryClient.invalidateQueries({ queryKey: [...homelessPeopleList.queryKey()] });
            },
            onError: (error) => {
                console.error(error);
            },
            onSettled: () => {
            }
        })
    }
    return (
        <div className="absolute right-[-20px] top-[-30px] flex items-center gap-2 z-10 p-2 bg-white rounded-[20px] border border-solid border-[#e7e7e7]">
            {
                statusList.map((status, index) => (
                    isPending && selectedStauts === index ?
                        <Loading key={index} loadingStyle="bg-green-500 size-4 mx-[29px]" />
                        :
                        <button key={index} disabled={isPending} onClick={() => changeStatus(status, index)}>
                            <StatusBadge lastLocationStatus={status} />
                        </button>
                ))}
        </div>
    )
};

export default StatusToggleList;