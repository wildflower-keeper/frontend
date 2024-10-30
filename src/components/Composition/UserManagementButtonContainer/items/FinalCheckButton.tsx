import { deleteUser, homelessPeopleList } from "@/api/v1/shelter-admin";
import { buttonStyle } from "./OpenUserManagement"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserContext } from "@/components/Layout/UserManagementProvider";

interface FinalCheckButtonProps {
    onCancelDeleteClick: () => void;
}

const FinalCheckButton = ({ onCancelDeleteClick }: FinalCheckButtonProps) => {
    const queryClient = useQueryClient();
    const userContext = useUserContext();
    const {checkedUserList, setIsDeleteSuccess, setIsOpenDeleteUser} = userContext;
    const { mutate } = useMutation({
        mutationKey: deleteUser.mutationKey(),
        mutationFn: (id: number) => deleteUser(id)
    });

    const closeDeleteUser = () => {
        setIsOpenDeleteUser(false);
    }

    const openDeleteSuccessMessage = () => {
        setIsDeleteSuccess(true);
    }
    
    const onSubmit = () => {
        checkedUserList.forEach((id) => {
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
        <>
            <div className="w-[224px] h-[44px]" />
            <div className="absolute flex flex-row items-center gap-5 px-4 py-2 bg-white rounded-[20px] shadow-xl">
                <div className="text-gray-500">정말 삭제하시겠습니까?</div>
                <button onClick={onSubmit} className={`bg-[#19c23d] text-white ${buttonStyle}`}>예</button>
                <button onClick={onCancelDeleteClick} className={`text-[#949494] ${buttonStyle}`}>아니오</button>
            </div>
        </>

    )
};

export default FinalCheckButton;