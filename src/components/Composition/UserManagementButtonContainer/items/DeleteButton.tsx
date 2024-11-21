import { deleteUser, homelessPeopleList } from "@/api/v1/shelter-admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserContext } from "@/components/Layout/UserManagementProvider";
import { buttonStyle } from "./OpenUserManagement"

interface DeleteButtonProps {
    onCancelDeleteClick: () => void,
}

const DeleteButton = ({onCancelDeleteClick}: DeleteButtonProps) => {
    const queryClient = useQueryClient();
    const userContext = useUserContext();
    const {checkedUserList, setIsDeleteSuccess, setIsOpenDeleteUser} = userContext;
    const { mutate } = useMutation({
        mutationKey: deleteUser.mutationKey(),
        mutationFn: (id: number) => deleteUser(id)
    });

    const openDeleteSuccessMessage = () => {
        setIsDeleteSuccess(true);
    }
    
    const onDeleteClick = () => {
        checkedUserList.map((id) => {
            mutate(id, {
                onSuccess: (res) => {
                    queryClient.invalidateQueries({queryKey: [...homelessPeopleList.queryKey()]});
                    onCancelDeleteClick();
                    openDeleteSuccessMessage();
                }
            })
        });
    };
    return (
        <div className="absolute top-12 right-0 w-[400px] flex flex-row items-center gap-2 px-3 py-1 bg-white rounded-[20px] shadow-2xl">
            이용자를 삭제하시겠습니까?
            <button onClick={onDeleteClick} className={`bg-black text-white ${buttonStyle}`}>삭제</button>
            <button onClick={onCancelDeleteClick} className={`text-[#949494] ${buttonStyle}`}>취소</button>
        </div>
    )
};

export default DeleteButton;