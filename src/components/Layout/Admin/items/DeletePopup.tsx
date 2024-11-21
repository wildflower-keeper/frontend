import { deleteAdmin } from "@/api/v2/shelter-admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

interface Props {
    selectedId: number, 
    setIsOpenDeletePopup: Dispatch<SetStateAction<boolean>>
}

const DeletePopup = ({selectedId, setIsOpenDeletePopup}: Props) => {
    const closeDeletePopup = () => setIsOpenDeletePopup(false);
    const {mutate} = useMutation({
        mutationKey: deleteAdmin.mutationKey(),
        mutationFn: (id: number) => deleteAdmin(id)
    });

    const queryClient = useQueryClient();

    const onDeleteClick = () => {
        mutate(selectedId, {
            onSuccess: (res) => {
                queryClient.invalidateQueries({queryKey: [...deleteAdmin.mutationKey()] });
                closeDeletePopup();
            }
        })
    }
    return (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-[350px] h-[120px] bg-white rounded-xl shadow-2xl flex flex-col gap-2 
        justify-center items-center border border-solid border-neutral-200">
            <div className="text-xl font-bold">삭제 하시겠습니까?</div>
            <div className="flex gap-3">
                <button onClick={closeDeletePopup} className="border border-solid border-green-500 text-green-500 px-8 py-1 rounded-md">취소</button>
                <button onClick={onDeleteClick} className="bg-red-500 text-white px-8 py-1 rounded-md">확인</button>
            </div>
        </div>
    )
}

export default DeletePopup;