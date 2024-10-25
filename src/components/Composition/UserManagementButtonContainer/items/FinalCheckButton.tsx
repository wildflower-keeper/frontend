import { deleteUser } from "@/api/v1/shelter-admin";
import { buttonStyle } from "./OpenUserManagement"
import { useMutation } from "@tanstack/react-query";
import userDeleteManagementStore from "@/store/useUserDeleteManagement";

interface FinalCheckButtonProps {
    onCancelDeleteClick: () => void;
}

const FinalCheckButton = ({ onCancelDeleteClick }: FinalCheckButtonProps) => {
    const { checkedUserList } = userDeleteManagementStore();
    // console.log(checkedUserList);
    const { mutate } = useMutation({
        mutationKey: deleteUser.mutationKey(),
        mutationFn: (id: number) => deleteUser(id)
    });
    const onSubmit = () => {
        checkedUserList.forEach((id) => {
            mutate(id, {
                onSuccess: (res) => {
                    console.log(res);
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